/*
Problem:
You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.
*/

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  // Write your code here
  const biNum = n.toString(2).padStart(32, '0');
  let string = '';
  for (let i = 0; i < biNum.length; i++) {
    string += biNum[i] === '1' ? '0' : '1';
  }
  return parseInt(string, 2);
}
