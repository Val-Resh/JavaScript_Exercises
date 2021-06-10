/*PROBLEM:
JavaScript has a beautiful built-in function sort that sorts an iterable, 
usually an array of numbers, sorting them in ascending order,
but using a block you can sort the iterable in different ways.

Create a function that takes an array of integers as an argument and returns the same array in ascending order.
Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

Examples
sortArray([2, -5, 1, 4, 7, 8]) should return [-5, 1, 2, 4, 7, 8]
sortArray([23, 15, 34, 17, -28]) should return [-28, 15, 17, 23, 34]
sortArray([38, 57, 45, 18, 47, 39]) should return [18, 38, 39, 45, 47, 57]

Notes
The arrays can contain either positive or negative elements.
The arrays will only contain integers.
The arrays won't contain duplicate numbers.
This is a challenge to enhance your ability, using the sort built-in won't enhance your skills. */

function sortArray(arr) {
  let solution = [];
  while(arr.length){
  let smallestNumber = arr[0];
	arr.forEach(value => {
		if (value < smallestNumber) smallestNumber = value;
	});
	solution.push(smallestNumber);
	arr.splice(arr.indexOf(smallestNumber), 1);
  }
  return solution;
}
