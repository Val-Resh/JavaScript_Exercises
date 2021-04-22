/*PROBLEM:

Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.
*/

function ascDesNone(arr, str) {
	switch (str){
		case "None":
			return arr;
			break;
		case "Asc":
			arr.sort((a, b) => a - b);
			return arr;
			break;
		case "Des":
			arr.sort((a, b) => b - a);
			return arr;
			break;
	}
}
