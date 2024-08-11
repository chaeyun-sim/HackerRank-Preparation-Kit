/*
Problem:
Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.
*/

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  const pattern = 'SOS';
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== pattern[i % 3]) cnt++;
  }
  return cnt;
}
