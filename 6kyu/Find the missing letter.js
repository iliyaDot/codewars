// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'


function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
      // Calculate the difference between the ASCII values of consecutive letters
      if (array[i+1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
        // Calculate and return the missing letter using String.fromCharCode
        return String.fromCharCode(array[i].charCodeAt(0) + 1);
      }
    }
  }