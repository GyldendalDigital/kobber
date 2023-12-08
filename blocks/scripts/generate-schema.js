import tsj from "ts-json-schema-generator";
import fs from "node:fs"
import path from "node:path"
import chalk from "chalk"

import { getArgs } from './utils.js'

// Generates a JSONSchema for generating editors in Redaptic.
// The schema is generated based on the type passed from package/package-name/types.ts
function main() {
	const args = getArgs()
	
	const packagePath = `../../blocks/${args.package}`;
	const typesPath = path.join(packagePath, 'types.ts');   
	const tsconfigPath = path.join(packagePath, 'tsconfig.json');   

	if (!fs.existsSync(packagePath)) {
		console.error(`Directory "${packagePath}" does not exist!`)
		process.exit(2)
	}

	/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
	const config = {
		path: typesPath,
		tsconfig: tsconfigPath,
		type: "*",
	};

	const output_path = packagePath;

	const schema = tsj.createGenerator(config).createSchema(config.type);
	const schemaString = JSON.stringify(schema, null, 2);
	
	fs.writeFile(`${output_path}/schema.json`, schemaString, (err) => {
		if (err) throw err;
	});

	console.log(`Schema written to ${output_path}\n ${chalk.green(schemaString)}`);
}

main()