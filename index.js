'use strict';

const rules = {
  'no-timer-module': require('./rules/no-timer-module.js'),
}

const processor = require('./processor.js')

module.exports = {
  rules: rules,

  processors: {
    ".we": processor,
  },

  configs: {
    recommended: {
      env: ['node'],
      rules: {
        'no-timer-module': 2
      }
    }
  }
}
