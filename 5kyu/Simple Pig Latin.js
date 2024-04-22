
// IPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
    return str.split(' ').map((x) => {
      // Check if the character is a punctuation mark (non-word character)
      if (!x.match(/[a-zA-Z]/)) {
        return x;  // Return punctuation as is.
      }
      // Transform word according to Pig Latin rules
      return x.slice(1) + x.charAt(0) + 'ay';
    }).join(' ');  // Join transformed words back into a sentence
  }