import {kobberEslintTsConfig} from '@gyldendal/kobber-eslint/ts-recommended'
import eslintConfigSanity from '@sanity/eslint-config-studio'

/**@type {import("eslint").Linter.Config} */
export default [...kobberEslintTsConfig, ...eslintConfigSanity]
