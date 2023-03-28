function reverse(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);
  // check if word is same as reversed word
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  a palindrome is a word that is same when written in reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("on"));
}

module.exports = isPalindrome;