'use strict'

const expect = require('chai').expect
const CLIEngine = require('eslint').CLIEngine
const plugin = require('../index')
const Path = require('path')

describe('test processor', function (done) {
  const cli = new CLIEngine({
    envs: ['es6'],
    useEslintrc: false,
    rules: {semi: [2, 'never']},
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module'
    }
  })

  it('should work with weex file', function (done) {
    cli.addPlugin('eslint-plugin-weex', plugin)
    const filename = Path.join(__dirname, 'assets/basic.we')

    const report = cli.executeOnFiles([filename])
    const errors = report.results[0].messages

    expect(errors).to.have.lengthOf(0)
    done()
  })

  it('should work with weex files without script tag', function () {
    cli.addPlugin('eslint-plugin-weex', plugin)
    const filename = Path.join(__dirname, 'assets/no-script.we')

    const report = cli.executeOnFiles([filename])
    const errors = report.results[0].messages

    expect(errors).to.have.lengthOf(0)
  })
})
