/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach(element => {
    if (element < 0) negatives++;
    else if (element > 0) positives++;
    else zeros++;
  });

  const printRatio = count => {
    const result = (num / arr.length).toFixed(6);
    console.log(result);
  };

  [positives, negatives, zeros].forEach(el => printRatio(el));
}
