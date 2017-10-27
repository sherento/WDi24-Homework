const maxOfTwoNumbers = function(a,b) /// Returns the max value between two numbers
{
  if (a > b) return a;
  else return b;
}

const maxOfThree = function(a,b,c) /// Returns the max value between 3 numbers a, b and c
{
  return maxOfTwoNumbers(a,maxOfTwoNumbers(b,c)); /// Returns the max value between a and the max value of b and c
}

console.log(`${maxOfThree(3,5,7)}`);


const vowels = ["a","e","i","o","u"];

const isaVowel = function (s) /// analyse if the variable s is a vowel
{
  if (vowels.indexOf(s)>=0) /// s is contained in the array "vowels"?
  {
    return true;
  }
  return false;
}

let boolean =  isaVowel("a"); /// analyse if "a" is a vowel
console.log(boolean);

const sumArray = function (s) /// returns the sum of the elements of s
{
  let sum_total = 0; /// contains the temporal sum of the elements

  for (let i = 0; i < s.length ;i++ )
  {
    sum_total += s[i]; /// update the temporal sum with each term of the array
  }
  return sum_total; /// return the total sum of the elements
}

const multiplyArray = function (s) /// returns the multiplication of the elements of the array s
{
  let mul_total = 1; /// temporal multiplication of the elements of the array
  for (let i = 0; i < s.length; i++ )
  {
    mul_total *= s[i]; /// update the temporal multiplication with each term of the array
  }
  return mul_total; /// returns the total multiplication of the elements
}

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));

const reverseString = function (s) /// this function reverses a string
{
  let s1 = ""; /// initialization of an empty string

  for (let i = s.length-1; i>=0; i-- )
  {
    s1 += s[i]; /// push each value from the end of the array to the first index
  }
  return (s1); /// returns the reversed string
}

console.log(reverseString("jag testar"));

const findLongestWord = function (s)
{
  let max_length = 0; /// temporal maximum length of the longest string
  for (let i = 0; i < s.length; i++ )
  {
    max_length = maxOfTwoNumbers(max_length,s[i].length); /// update if a longer string has been found
  }
  return max_length; /// return the value after analysing all the strings
}

console.log(findLongestWord(["abs","rtdrt","asa"]));

const filterLongWords = function (s,num) /// returns strings whose length is larger than a variable named "num"
{
  let temp_s = []; /// empty array

  for (let i = 0; i< s.length; i++ )
  {
    if (s[i].length > num)
      temp_s.push(s[i]);  /// push an element in the array if its length is greater than the variable "num"
  }
  return temp_s; /// return the array with its elements
}

console.log(filterLongWords(["abs","rtdrt","astyu","asa"],4));
