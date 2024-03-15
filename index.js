function hasTargetSum(array, target) {
  const trackRecord = new Set();
  for (const number of array) {
    match = target - number;
    if (trackRecord.has(match)) return true;
    trackRecord.add(number);
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  first var: 1 step
  for loop:
    first var: n steps
    if statement: n steps
    second var: n steps
  return: 1 step
  total = 1+3n+1 = O(3n + 2) = O(n) time complexity woohoo!
  
*/

/* 
  Add your pseudocode here
  0. create object to keep track of numbers we've already seen
  1. iterate over the array and compute the matching number to get to the target sum
  2. check whether any other elements of the array equal the match number
  3. if any of the other elements equal the match number, return true
  4. else, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 3, 8, 12], 1));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
