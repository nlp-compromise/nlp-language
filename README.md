
**nlp-language** takes an arbitrary length of text, and guesses which language it is.

classifies languages with the [latin alphabet](https://en.wikipedia.org/wiki/Latin_alphabet)

```javascript
var nlp = require('nlp_compromise');
var nlpLanguage = require('nlp-language');
nlp.plugin(nlpLanguage);

var t = nlp.text(myUnfinishedNovel);
t2.language();
//"english"
```

MIT
