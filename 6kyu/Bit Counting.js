// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case



var countBits = function(n) {
    // Convert number to binary string
    let baseTwo = n.toString(2);
  
    // Split into characters, filter '1's, and count them
    let count = baseTwo.split('').filter(char => char === '1').length;
  
    return count;
  }