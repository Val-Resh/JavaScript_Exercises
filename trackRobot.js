/*PROBLEM:
This robot roams around a 2D grid. 
It starts at (0, 0) facing North. 
After each time it moves, the robot rotates 90 degrees clockwise.
Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples
trackRobot(20, 30, 10, 40) ➞ [-10, 10]
trackRobot() ➞ [0, 0] // No movement means the robot stays at (0, 0).
trackRobot(-10, 20, 10) ➞ [20, -20] // The amount to move can be negative.

Notes
Each movement is an integer (whole number). */

function trackRobot(...steps) {
  const array = [...steps];
  let solution = [0, 0];
  let x = 1;
  let NY = [];
  let EW = [];
  for (let i = 0; i < array.length; i++){
    if (i % 2 === 0) NY.push(array[i]);
    else EW.push(array[i]);
  }
  NY.forEach(value => {
    if(x === 1 ) {
      solution[1] += value;
      x = 0;
    }
    else {
      solution[1] -= value;
      x = 1;
    }
  });
  x = 1
  EW.forEach(value => {
     if(x === 1 ) {
      solution[0] += value;
      x = 0;
    }
    else {
      solution[0] -= value;
      x = 1;
    }
  });
  return solution; 
}
