/*
Problem:
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either 'pangram' or 'not pangram' as appropriate.
*/

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  const map = new Map(
    Array.from({ length: 26 }, (_, i) => [String.fromCharCode('a'.charCodeAt(0) + i), 0])
  );

  for (let i = 0; i < s.length; i++) {
    const item = s[i].toLowerCase();
    if (item === ' ') continue;

    map.set(item, map.get(item) + 1);
  }
  return [...map.values()].some(el => el === 0) ? 'not pangram' : 'pangram';
}
