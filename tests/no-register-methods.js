"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../rules/no-register-methods')
const RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const errors = [{
  type: "Identifier",
  message: "registerMethods is deprecated",
}]

const tester = new RuleTester()
tester.run("no-register-methods", rule, {
  valid: [
    `this.registerMethods()`,
    `registerMyMethods()`,
  ],
  invalid: [{
    code: `registerMethods()`,
    errors
  }, {
    code: `registerMethods({ dom: function() {} })`,
    errors
  }, {
    code: `global.registerMethods()`,
    errors: [{
      type: "MemberExpression",
      message: "registerMethods is deprecated"
    }]
  }]
})
