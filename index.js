// Given a string, we'll say that the front is the first 3 chars of the string.

// If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

// Examples

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

function front3(str) {
  let result;
  let strToArr = str.split("");
  let char = strToArr[0] + strToArr[1] + strToArr[2];
  result = char + char + char;

  if (strToArr.length < 3) {
    result = str + str + str;
  }

  if (str.length < 1) {
    result = "";
  }
  return result;
}

console.log(front3("Java"));
console.log(front3("Chocolate"));
console.log(front3("abc"));
console.log(front3("hj"));
console.log(front3(""));
