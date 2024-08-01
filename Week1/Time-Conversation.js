/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const ampm = s.slice(-2);
  let [hour, ...rest] = s.slice(0, -2).split(':');
  hour = Number(hour);

  if (ampm === 'PM' && hour < 12) {
    hour += 12;
  } else if (ampm === 'AM' && hour === 12) {
    hour = 0;
  }
  hour = hour.toString().padStart(2, '0');
  return `${hour}:${rest.join(':')}`;
}
