/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.



*/

//Answer
function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      count++;
    }
  }
  return count;
}

console.log(getCount("abracadabra"));
