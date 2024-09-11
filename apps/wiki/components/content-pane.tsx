import Image, { StaticImageData } from "next/image"

type ContentPageProps = {
	image: StaticImageData
}

export function ContentPane({ image }: ContentPageProps) {
	return (
		<div className="w-full md:w-[1152px] h-[330px] rounded-[16px] flex items-center justify-center bg-[#F9EAED]">
			<div className="w-[275px] h-[270px] relative">
				<Image src={image} alt="Bilde" fill />
			</div>
		</div>
	)
}
