const { resolve } = require('path')
const { execFile } = require('child_process')

const tsMocha = resolve(__dirname, '../node_modules/.bin/ts-mocha')
const testdir = resolve(`${process}/test`)

function test() {
  execFile(tsMocha, ['--paths', `${testdir}/index.ts`, `${testdir}/**/*.ts`])
}

module.exports = test