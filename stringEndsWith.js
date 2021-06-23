/*PROBLEM:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
  return str.includes(ending) && str[str.length -1] === ending[ending.length -1] || ending === "";
}
