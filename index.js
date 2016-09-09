'use strict';

var rules = {
  'no-timer-module': require('./rules/no-timer-module.js'),
}

module.exports = {
  rules: rules,
  configs: {
    recommended: {
      env: ['node'],
      rules: {
        'no-timer-module': 2
      }
    }
  }
}
