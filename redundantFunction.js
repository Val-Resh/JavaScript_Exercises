/*PROBLEM:
Write a function redundant that takes in a string str and returns a function that returns str.
Your function should return a function, not a string.*/

function redundant(str) {
	return () => str;
}
