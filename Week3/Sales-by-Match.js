/*
Problem:
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
*/

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here

  ar.sort((a, b) => a - b);
  let total = 0;

  let i = 1;
  while (i < n) {
    console.log(ar[i - 1], ar[i]);
    if (ar[i - 1] === ar[i]) {
      total++;
      i += 2;
    } else {
      i++;
    }
  }

  return total;
}
