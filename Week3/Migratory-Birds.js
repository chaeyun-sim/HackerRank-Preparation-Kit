/*
Problem:
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
*/

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const map = new Map();
  arr.forEach(num => map.set(num, (map.get(num) || 0) + 1));

  let maxCount = 0;
  let bird = Infinity;

  for (const [k, v] of map) {
    if (v > maxCount || (v === maxCount && k < bird)) {
      maxCount = v;
      bird = k;
    }
  }
  return bird;
}
