DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.






JavaScript:
function count(string) {
  let obj = {};

  // Split the string into characters and iterate over them
  string.split('').forEach((char) => {
    if (obj[char]) {
      // If the character is already in the object, increment its count
      obj[char] += 1;
    } else {
      // If the character is not in the object, add it with a count of 1
      obj[char] = 1;
    }
  });

  // Return the object containing character counts
  return obj;
}