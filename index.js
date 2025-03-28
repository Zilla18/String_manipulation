/*
        Instructions

    String Manipulation Functions:

    Reverse a String: Write a function that reverses a given string.
    Count Characters: Create a function that counts the number of characters in a string.
    Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

    Array Functions:

    Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
    Sum of Array: Create a function that calculates the sum of all elements in an array.
    Filter Array: Implement a function that filters out elements from an array based on a given condition.

    Mathematical Functions:

    Factorial: Write a function to calculate the factorial of a given number.
    Prime Number Check: Create a function to check if a number is prime or not.
    Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
*/

// declaring the variable and intializing it
let wordToReverse = "welcome to gomycode";
console.log(wordToReverse); // print "welcome to gomycode" at this point

// example 1
// function to reverse the entire string
function reverseStr() {
  let reverseword = ""; // declaring an empty string to store the reverse word
  for (
    let i = wordToReverse.length - 1; // Setting (i) to the last index of the string to start reversing
    i >= 0; // Looping through the length of string to check if its index is still graterthan or equal to (0)
    i-- // subtracting 1 everytime it loop through the string
  ) {
    //
    reverseword += wordToReverse[i];
  }
  console.log(reverseword); // print the reverse word
}
reverseStr(); // run the function

// example 2
function rev() {
  let reverseword = wordToReverse.split(""); // this will split the words into character
  reverseword = reverseword.reverse(""); // this will reverse the word
  reverseword = reverseword.join(""); // this will join the word back

  console.log(reverseword);
}
rev(); // run the function

// function to count the numbers of character in a string
function countStr() {
  count = 0;
  for (let numBase = 0; numBase <= wordToReverse.length - 1; numBase++) {
    count++;
  }
  console.log(count);
}
countStr();
