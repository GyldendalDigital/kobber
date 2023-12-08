import childProcess from 'child_process'
import crypto from 'crypto'

const baseUrl = 'https://app-pnp-cms-prod.azurewebsites.net'

function hash(name) {
  const md5sum = crypto.createHash('md5');
  md5sum.update(name);
  const hex = md5sum.digest('hex');
  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

async function getBearerToken() {
  return new Promise((resolve) => {
    childProcess.exec('az account get-access-token', (err, stdout) => {
      if (err) {
        console.error('Failed to get access token. Is Azure CLI (az) installed and logged in?')
        console.error(err)
        process.exit(2)
      }

      const parsed = JSON.parse(stdout)
      resolve(parsed.accessToken)
    })
  })
}

function getArgs() {
  const args = {};
  if (process.argv.length === 2) {
    console.error('Expected at least one argument!');
    process.exit(1);
  } else {
    process.argv
      .slice(2, process.argv.length)
      .forEach(arg => {
        if (arg.slice(0, 2) === '--') {
          const longArg = arg.split('=');
          const longArgFlag = longArg[0].slice(2, longArg[0].length);
          const longArgValue = longArg.length > 1 ? longArg[1] : true;
          args[longArgFlag] = longArgValue;
        }
      });  
    return args;
  }
}


export { hash, getBearerToken, getArgs, baseUrl }