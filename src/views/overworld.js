const emoji = require('node-emoji')
const keyboard = require('./keyboards/overworld')

module.exports = {
  keyboard,
  message: emoji.emojify(`
:globe_with_meridians: Welcome to the overworld! :globe_with_meridians:
  `.trim()),
  error: `You don't have a character, create one at /start`
}