/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  // Write your code here
  const result = queries.map(query => {
    const filtered = strings.filter(el => el === query);
    return filtered.length;
  });

  return result;
}
