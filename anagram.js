/*PROBLEM:

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
The input will always be in lower case.

For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) returns ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) returns ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) returns []
*/

function anagrams(word, words) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let solution = [];
  
  for (let char of word){
    let temp = alphabet.indexOf(char);
    count[temp] += 1;
  }
  
  for (let string of words){
    let tempCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let char of string){
      let temp = alphabet.indexOf(char);
      tempCount[temp] += 1;
    }
    let stringX = "";
    let stringY = "";
    count.forEach(value => stringX += value);
    tempCount.forEach(value => stringY += value);
    if (stringX === stringY) solution.push(string);
  }

  return solution;
}
