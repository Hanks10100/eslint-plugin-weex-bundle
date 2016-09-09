"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../rules/no-timer-module')
const RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const errors = [{
  type: "Identifier",
  message: "Do not use timer module",
}]

const tester = new RuleTester()
tester.run("no-timer-module", rule, {
  valid: [
    `foo.bar()`,
    `require('@weex-module/dom')`,
  ],
  invalid: [{
    code: `require('@weex-module/timer')`,
    errors
  }, {
    code: `var timer = require("@weex-module/timer");`,
    errors
  }]
})
