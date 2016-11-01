"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "registerMethods 方法已经被废弃",
      category: "Module",
      recommended: false
    }
  },

  create(context) {
    return {
      CallExpression: function(node) {
        var callee = node.callee
        if ((callee.type === 'Identifier' && callee.name === 'registerMethods')
          || (callee.type === 'MemberExpression' && callee.object.name === 'global')) {
          context.report({
            node: callee,
            message: 'registerMethods is deprecated'
          })
        }
      }
    }
  }
}
