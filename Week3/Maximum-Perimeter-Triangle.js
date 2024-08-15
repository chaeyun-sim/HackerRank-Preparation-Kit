/*
Problem:
Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
If no non-degenerate triangle exists, return [-1].
*/

/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => a - b);

  let max = 0;
  let result = [-1];

  for (let i = 0; i < sticks.length - 2; i++) {
    let a = sticks[i];
    let b = sticks[i + 1];
    let c = sticks[i + 2];

    if (a + b > c) {
      let perimeter = a + b + c;
      if (perimeter > max) {
        max = perimeter;
        result = [a, b, c];
      }
    }
  }

  return result;
}
