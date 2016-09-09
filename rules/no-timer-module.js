"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "禁用 Timer 模块",
      category: "Module",
      recommended: false
    }
  },

  create(context) {

    return {

      CallExpression: function(node) {
        var callee = node.callee

        if (callee.type === 'Identifier' && callee.name === 'require') {
          const args = node.arguments
          if (args[0] && args[0].value === '@weex-module/timer') {
            context.report({
              node: callee,
              message: 'Do not use timer module'
            })
          }
        }
      }

    }

  }
}
