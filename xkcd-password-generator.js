/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var makeXkcdPasswordGenerator = function () {

  passwordWordCount = 4;

  var bitCountInUint32 = 32;

  var getCryptographicallySecureRandomNumber = function (max) {
    var bitsOfEntropyCount = Math.log(max + 1) / Math.LN2;
    var bitsToRemoveCount = bitCountInUint32 - bitsOfEntropyCount;
    while (true) {
      var randomValues = new Uint32Array(1);
      window.crypto.getRandomValues(randomValues);
      var randomValue = Math.abs(randomValues[0] >> bitsToRemoveCount);
      if (randomValue <= max) {
        return randomValue;
      }
    }
  };

  var generatePassword = function () {
    var password = '';
    for (var i = 0; i < passwordWordCount; i++) {
      if (password) {
        password += ' ';
      }
      password += words[getCryptographicallySecureRandomNumber(words.length)];
    }
    return password;
  }

  return { generatePassword: generatePassword };

};
