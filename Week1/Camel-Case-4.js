function processData(input) {
  //Enter your code here
  const arr = input.split('\n').map(el => el.replace('\r', ''));

  arr.forEach(str => {
    let [operation1, operation2, string] = str.split(';');
    let result = string;

    if (operation1 === 'S') {
      result = splitString(string);
    } else if (operation1 === 'C') {
      result = combineString(string, operation2 === 'C');
      if (operation2 === 'M') result += '()';
    }
    console.log(result);
  });
}

function splitString(string) {
  const isMethod = string.endsWith('()');
  if (isMethod) string = string.slice(0, -2);
  return string.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

function combineString(string, isClass) {
  const arr = string.split(' ');
  const result = arr
    .map((word, index) => {
      if (index === 0 && !isClass) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join('');

  return result;
}
