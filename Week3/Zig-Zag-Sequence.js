/*
Problem:
Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k = (n + 1) / 2. You need to find the lexicographically smallest zig zag sequence of the given array.
*/

/* Not Working: Only Worked in Java */

function processData(input) {
  const [_, n, rest] = input.split('\n');
  const k = Math.floor(Number(n) / 2);
  const arr = rest.split(' ').map(Number);
  const result = [...arr.slice(0, k), ...arr.slice(k).reverse()].join(' ');

  console.log(result);
}
