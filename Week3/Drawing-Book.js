/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let pageN = Math.floor(n / 2);
  let pageP = Math.floor(p / 2);
  return Math.min(pageN - pageP, pageP);
}
