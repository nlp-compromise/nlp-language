'use strict';

const guess = require("./guess.js");

// set method on 'Term', then reference that on Sentence & Text
let nlpLanguage = {
  Term: {
    language: function() {
      return guess.word(this);
    }
  },
  Sentence: {
    language: function() {
      return guess.sentence(this)
    }
  },
  Text: {
    pronounce: function() {
      return guess.text(this)
    }
  }
};

module.exports = nlpPronounce;

// const nlp = require('nlp_compromise');
// nlp.plugin(nlpPronounce);
// let w = nlp.text('tony danza');
// console.log(w.pronounce());