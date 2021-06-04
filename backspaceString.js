/*PROBLEM:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
	let solution = "";
  while(s.includes("#")){
    let index = s.indexOf("#");
    s = s.substring(0, index - 1) + s.substring(index + 1, s.length);
  }
  return s;
};
