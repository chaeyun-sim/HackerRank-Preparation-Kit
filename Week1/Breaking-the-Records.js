/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here
  if (scores.length === 0) return [0, 0];
  let count = [0, 0];
  let min = scores[0];
  let max = scores[0];

  scores.forEach(score => {
    if (score > max) {
      max = score;
      count[0]++;
    }
    if (score < min) {
      min = score;
      count[1]++;
    }
  });

  return count;
}
