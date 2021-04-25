/*PROBLEM:
Create a function that recursively counts the integer's number of digits.

Examples
count(318) ➞ 3
count(-92563) ➞ 5
count(4666) ➞ 4
count(-314890) ➞ 6
count(654321) ➞ 6
count(638476) ➞ 6 */

function count(n) {
  let solution = 0;
  n = n.toString();
  function recursion(){
	if (!n.length) return;
	else {
		if (n[0] === "-") n = n.replace(n[0], "");
		n = n.replace(n[0], "");
    solution++;
		return recursion();
	}
}
recursion();
return solution;
}
