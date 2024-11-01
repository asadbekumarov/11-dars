// Sum of Array Elements: Write a recursive function to calculate the sum of all elements in an array of numbers.
// Hint: Start with the first element and recursively add the sum of the rest of the array.
// 1-
// let numbers = [1, 2, 3, 4, 5];
// function array(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + array(arr.slice(1));
// }

// let count = array(numbers);
// console.log(count);

//  Power Calculation: Write a recursive function to calculate a raised to the power of n (i.e., x^n).
// Hint: Use power(x, n) = x × power(x, n − 1) with a base case of power(x, 0) = 1.
// 2-
// let x = +prompt("Son kiriting");
// let n = +prompt("Yana son kiriting");

// function recursiveFunction(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   return x * recursiveFunction(x, n - 1);
// }

// console.log(recursiveFunction(x, n));

//  Reverse a String: Create a recursive function to reverse a string.
// Hint: Take the first character and add it to the reverse of the rest of the string.
// 3-
// let text = prompt("matn kirt");
// function reverseString(text) {
//   let sum = "";

//   for (let i = text.length - 1; i >= 0; i--) {
//     sum += text[i];
//   }

//   return sum;
// }
// console.log(reverseString(text));
