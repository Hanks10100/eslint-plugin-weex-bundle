'use strict';

module.exports = {
  preprocess: function (text, filename) {
    return ['']
  },
  postprocess: function (messages, filename) {
    return messages[0]
  }
}
