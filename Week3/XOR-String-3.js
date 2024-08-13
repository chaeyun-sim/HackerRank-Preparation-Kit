/* Not Working: Only Worked in Java */

process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});
process.stdin.on('end', function () {
  const [str1, str2] = input
    .trim()
    .split('\n')
    .map(line => line.trim());

  const result = [...str1].map((s, i) => (s !== str2[i] ? '1' : '0')).join('');
  console.log(result);
});
