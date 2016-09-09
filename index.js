'use strict';

var rules = {
  'no-this': require( `${__dirname}/rules/no-this.js` )
}

module.exports = {
  rules: rules,
  configs: {
    recommended: {
      env: ['node'],
      rules: {
        'no-this': 2
      }
    }
  }
}
