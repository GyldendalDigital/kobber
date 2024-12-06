import lamejs from "lamejs";
import MPEGMode from "lamejs/src/js/MPEGMode.js";
import Lame from "lamejs/src/js/Lame.js";
import BitStream from "lamejs/src/js/BitStream.js";

export async function serializeBlobs(blobs) {
    const parts = [];
    for (const blob of blobs) {
        const sizeHeader = new ArrayBuffer(4);
        const view = new DataView(sizeHeader);
        view.setUint32(0, blob.size, true);
        parts.push(new Blob([sizeHeader]), new Blob([blob], {type: 'audio/mp3'}));
    }

    return new Blob(parts);
}

export async function deserializeBlob(combinedBlob) {
    const blobs = [];
    let offset = 0;

    while (offset < combinedBlob.size) {
        const sizeHeader = await combinedBlob.slice(offset, offset + 4).arrayBuffer();
        const blobSize = new DataView(sizeHeader).getUint32(0, true);
        offset += 4;

        if (offset === 4 && (blobSize <= 0 || offset + blobSize > combinedBlob.size)) {
            if (combinedBlob.type === 'audio/mpeg' || combinedBlob.type === 'application/octet-stream') {
                blobs.push(new Blob([combinedBlob], {type: 'audio/mpeg'}));
                return blobs;
            } else {
                blobs.push(new Blob([combinedBlob], {type: combinedBlob.type}));
                return blobs;
            }
        }

        const blob = combinedBlob.slice(offset, offset + blobSize);
        blobs.push(new Blob([blob], {type: 'audio/mp3'}));
        offset += blobSize;
    }
    return blobs;
}

export function audioBufferToWav(aBuffer) {
    window.MPEGMode = MPEGMode;
    window.Lame = Lame;
    window.BitStream = BitStream;

    let numOfChan = aBuffer.numberOfChannels,
        btwLength = aBuffer.length * numOfChan * 2 + 44,
        btwArrBuff = new ArrayBuffer(btwLength),
        btwView = new DataView(btwArrBuff),
        btwChnls = [],
        btwIndex,
        btwSample,
        btwOffset = 0,
        btwPos = 0;

    function setUint16(data) {
        btwView.setUint16(btwPos, data, true);
        btwPos += 2;
    }

    function setUint32(data) {
        btwView.setUint32(btwPos, data, true);
        btwPos += 4;
    }

    setUint32(0x46464952); // "RIFF"
    setUint32(btwLength - 8); // file length - 8
    setUint32(0x45564157); // "WAVE"
    setUint32(0x20746d66); // "fmt " chunk
    setUint32(16); // length = 16
    setUint16(1); // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(aBuffer.sampleRate);
    setUint32(aBuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2); // block-align
    setUint16(16); // 16-bit
    setUint32(0x61746164); // "data" - chunk
    setUint32(btwLength - btwPos - 4); // chunk length

    for (btwIndex = 0; btwIndex < aBuffer.numberOfChannels; btwIndex++)
        btwChnls.push(aBuffer.getChannelData(btwIndex));

    while (btwPos < btwLength) {
        for (btwIndex = 0; btwIndex < numOfChan; btwIndex++) {
            // interleave btwChnls
            btwSample = Math.max(-1, Math.min(1, btwChnls[btwIndex][btwOffset])); // clamp
            btwSample = (0.5 + btwSample < 0 ? btwSample * 32768 : btwSample * 32767) | 0; // scale to 16-bit signed int
            btwView.setInt16(btwPos, btwSample, true); // write 16-bit sample
            btwPos += 2;
        }
        btwOffset++; // next source sample
    }

    let wavHdr = lamejs.WavHeader.readHeader(new DataView(btwArrBuff));
    let wavSamples = new Int16Array(btwArrBuff, wavHdr.dataOffset, wavHdr.dataLen / 2);

    return wavToMp3(wavHdr.channels, wavHdr.sampleRate, wavSamples);
    //return wavSamples;
}

function wavToMp3(channels, sampleRate, samples) {
    let buffer = [];
    let mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    let remaining = samples.length;
    let samplesPerFrame = 1152;
    for (let i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
        let mono = samples.subarray(i, i + samplesPerFrame);
        let mp3buf = mp3enc.encodeBuffer(mono);
        if (mp3buf.length > 0) {
            buffer.push(new Int8Array(mp3buf));
        }
        remaining -= samplesPerFrame;
    }
    let d = mp3enc.flush();
    if(d.length > 0){
        buffer.push(new Int8Array(d));
    }

    return new Blob(buffer, {type: 'audio/mp3'});
}