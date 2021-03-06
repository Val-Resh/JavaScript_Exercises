/*PROBLEM:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Beware: r must be without duplicates. */

function inArray(array1,array2){
  let solution = [];
  array2.forEach(element2 => {
    array1.forEach(element1 => {
      if (element2.match(element1) !== null && !solution.includes(element1)) solution.push(element1);
    });
  });
  solution.sort();
  return solution;
}
