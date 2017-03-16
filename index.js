var stringify = require('fast-safe-stringify')
var jsonParse = require('fast-json-parse')
var explain = require('explain-error')
var toBuffer = require('to-buffer')
var assert = require('assert')

module.exports = function translate (opts) {
  var translations = opts.translations
  var def = opts.default

  assert.ok(Buffer.isBuffer(translations) || typeof translations === 'object', 'translation-picker: translations should be type Object or instanceof Buffer')
  assert.ok(typeof def === 'string', 'translation-picker: default language should be type string')

  if (Buffer.isBuffer(translations) || typeof translations === 'string') {
    var buf = toBuffer(translations)
    var json = jsonParse(buf)
    if (json.err) {
      return explain(json.err, 'translation-picker: error parsing translation JSON')
    }
    translations = json.value
  }

  if (typeof translations === 'object') translations = stringify(translations)

  return {
    pick: function (term, lang) {
      lang = lang || def
      return translations[lang][term] || ''
    }
  }
}
