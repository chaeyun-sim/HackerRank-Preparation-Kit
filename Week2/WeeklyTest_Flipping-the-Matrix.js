/*
Problem:
Sean invented a game involving a 2n × 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n × n submatrix located in the upper-left quadrant of the matrix.
Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
*/

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  for (let i = 0; i < rows / 2; i++) {
    for (let j = 0; j < cols / 2; j++) {
      const max = Math.max(
        matrix[i][j],
        matrix[i][cols - j - 1],
        matrix[rows - i - 1][j],
        matrix[rows - i - 1][cols - j - 1]
      );
      sum += max;
    }
  }

  return sum;
}
