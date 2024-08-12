/*
Problem:
There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

There will be  queries consisting of A, B, and k. For each query, return 'YES' if some permutation A', B' satisfying the relation exists. Otherwise, return 'NO'.
*/

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO';
    }
  }

  return 'YES';
}
