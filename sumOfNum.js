/* PROBLEM:
   Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. 
   If the two numbers are equal return a or b.

   Note: a and b are not ordered!*/
   
  function getSum(a, b ){
  let solution = 0;
  
  if (b  < a) {
    let temp = b;
    b = a;
    a = temp;
  }
  
  for (let i = a; i <= b; i++){
  solution += i;
  }
  
  return solution;
}
