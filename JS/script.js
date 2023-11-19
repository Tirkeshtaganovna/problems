// 1 Even or Odd

// function evenOdd() {
//     let num = Number(prompt("Enter number:"))
//     if (num % 2 === 0)
//         console.log(`${num} is Even`);
//     else
//         console.log(`${num} is Odd`);
// }
// evenOdd();

// 2 Fibonacci

// function fbSeqc() {
//     let num = Number(prompt("Enter terms:")),
//         n1 = 0,
//         n2 = 1,
//         nextTerm;
//     console.log("Fibonacci series:");
//     for (let i = 1; i <= num; i++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm
//     }
// }
// fbSeqc();

// 3 Reverse

// function reverseStr(str) {
//     let arrayStr = str.split("");
//     let reverseArr = arrayStr.reverse();
//     let joinArr = reverseArr.join("");
//     return joinArr
// }
// let string = prompt("Enter string:");
// let result = reverseStr(string);
// console.log(result);

// 4 Leap Year

// function checkYear(year) {
//     if ((year % 4 === 0) && (year % 100 === !0) || (year % 400 === 0)) {
//         console.log(`${year} is a leap year`);
//     } else
//         console.log(`${year} is not a leap year`);

// }

// let year = prompt("Enter year:")
// checkYear(year);

// 5 Prime Numbers

// let num= parseInt(prompt("Enter num"))
// function primeNum() {
//     for (let i = 1; i <= c; i++) {
//         n = 0
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 n = 1
//                 break
//             }

//         }
//         if (i > 1 && n === 0) {
//             console.log(i);
//         }
//     }
// }
// primeNum()

// 6 Palindrome

// let string = prompt("Enter a string:")
// function checkPalindrome(str) {
//     let arrayVal = str.split("");
//     let revArrVal = arrayVal.reverse();
//     let revStr = revArrVal.join("");
//     if (str === revStr) {
//         console.log("It is a palindrome");
//     } else
//         console.log("It is not a palindrome");
// }
// checkPalindrome(string)

// 7 Factorial

// let number = parseInt(prompt("Enter a positive number:"))
// function factorial() {
//     if (number < 0) {
//         console.log("Error! Factorial for negative number does not exist!");

//     } else if (number === 0) {
//         console.log(`The factorial of${number} is 1`);
//     } else {
//         let fact = 1
//         for (let i = 1; i <= number; i++) {
//             fact *= i

//         }
//         console.log(`The factorial of ${number} is ${fact}`);
//     }
// }
// factorial(number)

// 8 Sorting Algorithms

// const arr = [34, 67, 89, 12, 5, 78, 90]
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }


//     }
//     console.log(arr);

// }
// bubbleSort(arr)

// 9 Sum of array elements
// const integers = [1, 45, 67, 89, 34, 12]
// let sum = 0
// function sumOfInt() {
//     for (i = 0; i < integers.length; i++) {
//         sum += integers[i]
//     }
//     console.log(sum);
// }
// sumOfInt()


// ForEach
// integers.forEach(num => {
//     sum += num
// })
// console.log(sum);

// 10 Find Maximum and Minimum

// const arr = [34, 67, 89, 12, 5, 78, 90]
// function minMax(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }


//     }
//     console.log(`Max value ${arr[arr.length - 1]}, Min value ${arr[0]}`);

// }
// minMax(arr)

// 11 Count Vowels and Consonants

// const vowels = ["a", "e", "i", "o", "u"]
// let string = prompt("Enter a string:")
// function countVowels(str) {
//     let vowel = 0
//     let consonat = 0

//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             vowel++
//         }
//         else
//             consonat++

//     }
//     // return count
//     console.log(`In ${str} ${vowel} vowel, ${consonat} consonant have`);
// }
// // let result = countVowels(string)
// // console.log(result);
// countVowels(string)

// 12 Sum of digits

// let num = parseInt(prompt("Enter number"))
// function getSum(n) {
//     let sum = 0
//     while (n > 0) {
//         sum = sum + n % 10
//         n = parseInt(n / 10)

//     } console.log(sum);
// }
// getSum(num)

// 13 Largest Word in a Sentence

// function longestWordLength() {
//     let sentence = "My name is Ogulsha"
//     let words = sentence.split(' ');
//     let maxlength = 0;
//     let longestWord = " ";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxlength) {
//             maxlength = words[i].length;
//             longestWord = words[i]

//         }

//     }
//     console.log(maxlength);
//     console.log(longestWord);
// }
// longestWordLength()

// 14

// const array = [1, 2, 3, 4, 5, 77, 88, 77, 2, 3]
// const duplicates = []
// function findDuplication() {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 duplicates.push(array[i])

//             }

//         }

//     }
//     console.log(duplicates);
// }
// findDuplication()

// 15 Armstrong number

// let e, x, d = 0
// let b = Number(prompt("Enter a number:"));
// x = b
// while (x > 0) {
//     e = x % 10;
//     x = parseInt(x / 10);
//     d = d + (e * e * e)
// } if (b === d) {
//     console.log(`${b} is an Armstrong number`);
// } else
//     console.log(`${b} is not an Armstrong number`);

// 16 Check for anagrams

// function checkAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//         console.log("invalid input");
//         return
//     }
//     let str1 = a.split("").sort().join("")
//     let str2 = b.split("").sort().join("")
//     if (str1 === str2) {
//         console.log("True");
//     } else
//         console.log("False");
// }
// checkAnagram("indian", "ndiani")


// 17 Find Missing number

// function findMissing(arr, N) {
//     let temp = [];
//     for (let i = 0; i <= N; i++) {
//         temp[i] = 0
//     } for (let i = 0; i < N; i++) {
//         temp[arr[i] - 1] = 1

//     } let ans = 0
//     for (let i = 0; i < N; i++) {
//         if (temp[i] === 0) {
//             ans = i + 1
//         }
//     }
//     console.log(ans);
// }
// let arr = [1, 3, 8, 5, 6, 2]
// let n = arr.length
// findMissing(arr,n)