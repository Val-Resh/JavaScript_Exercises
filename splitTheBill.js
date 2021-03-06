/* PROBLEM:
  It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

  The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
  The function should return an object/dict with the same names, showing how much money the members should pay or receive.
  Further points:

  The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
  If value is a decimal, round to two decimal places.
  
  Eg. var group = {
    A: 20, 
    B: 15, 
    C: 10
  }
  
  should return{A: 5, B: 0, C: -5} */

function splitTheBill(x) {
    let billValue = 0;
    let countPeople = 0;
    for (let val of Object.values(x)) {
      billValue += val;
      countPeople ++;
    }
    let splitBill = billValue / countPeople;
    for (let key of Object.keys(x)) {
      x[key] = parseFloat((x[key] - splitBill).toFixed(2));
      }
      return x;
}
