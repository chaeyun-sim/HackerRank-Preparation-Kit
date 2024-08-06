/*
Problem:
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix 'arr' is shown below:

1 2 3
4 5 6
7 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
*/

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let leftTotal = 0;
  let rightTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftTotal += arr[i][i];
    rightTotal += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftTotal - rightTotal);
}
