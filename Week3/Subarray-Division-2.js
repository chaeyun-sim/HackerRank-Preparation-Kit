/*
Problem:
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
- The length of the segment matcher Ron's birth month, and,
- The sum of the integers on the sqaurer is equal to his birthday.
*/

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let cnt = 0;
  for (let i = m; i <= s.length; i++) {
    const arr = s.slice(i - m, i);
    const sum = arr.reduce((a, b) => a + b);
    if (sum === d) cnt++;
  }
  return cnt;
}
