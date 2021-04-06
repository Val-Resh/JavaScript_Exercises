/* PROBLEM:
In the following 6 digit number:
283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:
1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. 
The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. */

function solution(digits){
 let biggestInt = 0;
 let biggestNumbers = [];
 let solution = 0;

 for (let i = 0; i < digits.length; i++){
   if (digits[i] === digits.length - 1) break;
   else if (digits[i] > biggestInt) biggestInt = digits[i];
 } 

 while (digits.includes(biggestInt)) {
   let startIndex = digits.indexOf(biggestInt);
   let endIndex = digits.indexOf(biggestInt) + 5;
   biggestNumbers.push(digits.substring(startIndex, endIndex));
   digits = digits.replace(biggestInt, "");
 }

 for (let number of biggestNumbers) {
   if (number > solution) solution = number;
 }
  return parseInt(solution);
}
