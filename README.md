xkcd-password-generator
=======================

A password generator based on http://xkcd.com/936/

Words are from http://www.englishclub.com/vocabulary/common-words-5000.htm

Randomness is done using https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
bit shifted to reduce bits of entropy,
getting a new random value if the number generated is still higher than the required max.

Simple. Nothing fancy.
