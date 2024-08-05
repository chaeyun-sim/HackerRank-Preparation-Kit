// Problem: Given an array of integers, where all elements but one occur twice, find the unique element.

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  const map = new Map();

  a.forEach(num => map.set(num, (map.get(num) || 0) + 1));
  const filtered = [...map].filter(el => el[1] === 1);
  return filtered[0][0];
}
