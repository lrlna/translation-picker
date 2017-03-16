# translation-picker

Switch between different languages with this one trick (ahem, package).

# Usage
The easiest way to handle multiple languages is to store various translations in
a file, something like this:
```json
{
  "ar": {
    "language": "العربية",
    "subject": "الموضوع"
  },
  "fa": {
    "language": "فارسی",
    "subject": "موضوع"
  },
  "ku": {
    "language": "کوردی",
    "subject": "بابەت"
  }
}
```
That you can then use with translation-picker: 
```js
var translationPicker = require('translation-picker')
var path = require('path')
var fs = require('fs')

var file = fs.readFileSync(path.join(__dirname, './path/to/json/file'))
var translate = translationPicker({
  translations: file,
  default: 'ar'
})

translate('subject', 'ku') //بابەت
```

### var translate = translationPicker(opts)
- _opts.translations_: takes in a buffer, or an object
- _opts.default_: have a language you want to default if no language is provided in `translate.pick`

### translate.pick(term, [lang])
Provide a term string, and optional language. Will default to previously provided default language.

# License
[MIT](https://tldrlegal.com/license/mit-license)
