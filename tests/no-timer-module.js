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
    `require('@weex-module/whatever')`,
    `__weex_require__('@weex-module/dom')`,
  ],
  invalid: [{
    code: `require('@weex-module/timer')`,
    errors
  }, {
    code: `abc=__weex_require__("@weex-module/timer")`,
    errors
  }, {
    code: `;__weex_require__(  "@weex-module/timer");module.exports={}`,
    errors
  }, {
    code: `(function(){__weex_require__("@weex-module/timer")})()`,
    errors
  }]
})
