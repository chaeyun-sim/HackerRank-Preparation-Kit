/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  const min = arr.slice(0, 4).reduce((a, b) => a + b);
  const max = arr.slice(arr.length - 4, arr.length).reduce((a, b) => a + b);
  console.log(min, max);
}
