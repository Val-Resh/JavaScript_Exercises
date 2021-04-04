/*PROBLEM:
Replace all vowel to exclamation mark in the sentence.
*/
function replace(string){
  //code here
  const vowels = "aeiouAEIOU";
  for (let char of string) {
    if (vowels.includes(char)) string = string.replace(char, "!");
  }
  return string;
}
