/* global module */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

// var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var slength = str.length
      , previousChar = null
      , currentChar = null
      , spaceChar = " "
      , counter = 0
      , index = 0;

    for (index = 0; index < slength; index++) {
      currentChar = str.charAt(index);
      if (currentChar !== spaceChar && (previousChar === spaceChar || index === 0)) {
        counter++;
      }
      previousChar = currentChar;
    }

    return counter;
  },

  oop: function(str) { "use strict";

    var Char = function(char, prevChar, first) {
      this.char = char;
      this.prevChar = function() { return prevChar || new Char(""); };
      this.isFirst = function() { return !!first; };
      this.isEmpty = function() { return this.char === ""; };
      this.isSpace = function() { return this.char === " "; };
    };

    var CharSequence = function(string) {
      this.sequence = string;
      this.prevChar = null;
      this.currentChar = null;
      this.currentCharIndex = 0;

      this.next = function() {
        var end = this.currentCharIndex === this.sequence.length
          , toReturn = null
          , isFirst = this.currentCharIndex === 0;

        if (!end) {
          this.prevChar = this.currentChar;
          this.currentCharIndex = ++this.currentCharIndex;
          this.currentChar = new Char(this.sequence.charAt(this.currentCharIndex), this.prevChar, isFirst);
          toReturn = this.currentChar;
        }
        return toReturn;
      };

      this.wordsCount = function() {
        var counter = 0, curChar = null;
        while ((curChar = this.next())) {
          if (!curChar.isSpace() && !curChar.isEmpty() && (curChar.prevChar().isSpace() || curChar.isFirst())) {
            counter++;
          }
        }
        return counter;
      };
    };

    return (new CharSequence(str)).wordsCount();
  },

  functional: function(str) { "use strict";
    function isSpaceChar(char) {
      return char === " ";
    }
    function isWordStart(currentChar, previousChar, itIsFirstChar) {
      return !isSpaceChar(currentChar) && (isSpaceChar(previousChar) || itIsFirstChar);
    }
    function firstElement(string) {
      return string.slice(0, 1);
    }
    function lastList(string) {
      return string.slice(1);
    }
    function isEnded(string) {
      return string === "";
    }
    function upCounter(args) {
      args.counter += isWordStart(args.cur, args.prev, args.first) ? 1 : 0;
      args.prev = args.cur;
      args.first = false;
      return args;
    }
    function wordCount(args) {
      args.cur = firstElement(args.string);
      args.string = lastList(args.string);
      return isEnded(args.string) ? args.counter : wordCount(upCounter(args));
    }
    return wordCount({string: str, cur: " ", prev: " ", counter: 0, first: true});
  }
};
