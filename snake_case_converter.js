/*PROBLEM:
Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. 
Lowercase characters can be numbers. If method gets number, it should return string.
Eg:
toUnderscore('TestController'); //  should return "test_controller"
toUnderscore('MoviesAndBooks'); // should return  "movies_and_books"
toUnderscore('App7Test'); // should return "app7_test"
toUnderscore(1); // should return  "1"*/

function toUnderscore(string) {
 let array = [];
  if (typeof(string) === "number") return string.toString();
  while (string.length){
    string = string.replace(string.charAt(0), string.charAt(0).toLowerCase());
    if(string.search("[A-Z]") !== -1) {
    array.push(string.substring(0, string.search("[A-Z]")));
      string = string.slice(string.search("[A-Z]"));
      }
    else {
      array.push(string);
      string = "";
    }
  }
  let solution = "";
  array.forEach(word => {
    if (word !== array[array.length - 1]) solution += word + "_";
    else solution += word;
  })
  return solution;
}
