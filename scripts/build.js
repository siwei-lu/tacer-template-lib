const { rollup } = require('rollup')
const { resolve } = require('path')
const autoExternal = require('rollup-plugin-auto-external')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')

const entrypoint = resolve(`${process.cwd()}/src/index.ts`)
const distPath = resolve(`${process.cwd()}/dist/index.js`)
const cacheRoot = resolve(__dirname, '../.cache')

const tsconfigDefaults = {
  declaration: true,
  declarationDir: './types',
}

function build() {
  rollup({
    input: entrypoint,
    plugins: [
      autoExternal(),
      typescript({
        cacheRoot,
        tsconfigDefaults,
        useTsconfigDeclarationDir: true,
      }),
      terser(),
    ],
  }).then(bundle => bundle.write({ file: distPath, format: 'cjs' }))
}

module.exports = build
