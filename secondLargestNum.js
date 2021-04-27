/*PROBLEM:
Create a function that takes an array of numbers and returns the second largest number.

Examples:
secondLargest([10, 40, 30, 20, 50]) should return 40
secondLargest([25, 143, 89, 13, 105]) should return 105
secondLargest([54, 23, 11, 17, 10]) should return 23

Notes:
There will be at least two numbers in the array. */

function secondLargest(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > max) max = arr[i];
	}
	arr.splice(arr.indexOf(max), 1);
	let secondMax = arr[0];
	for (let number of arr){
		if (number > secondMax) secondMax = number;
	}
	return secondMax;
}
