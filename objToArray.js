/*PROBLEM:
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []

Notes
Return an empty array if the object is empty.*/

function toArray(obj) {
	return Object.entries(obj);
}
function toArray(obj) {
	let solution = [];
	for (let [key, value] of Object.entries(obj)){
		solution.push([key, value]);
	return solution;
}
  
  //alternatively you can simply do 
 /*function toArray(obj) {
	return Object.entries(obj);
}*/
