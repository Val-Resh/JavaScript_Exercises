/* PROBLEM:
    Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. 
    To pass the test, a student cannot accumulate more than 18 demerit points.
    
    At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
    Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.
    */
    
function passed (list) { 
//code here
  let solution = 0;
  let count = 0;
  let notPassed = 0;
  for (let number of list){
    if (number <= 18) {
      solution += number;
      count++;
      }
    if (number > 18) notPassed ++;
  }
  if (notPassed == list.length) return "No pass scores registered.";
  else return Math.round(solution / count);
} 
