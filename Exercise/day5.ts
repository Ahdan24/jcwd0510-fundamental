// No 1.

//Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// with sort function
 function getDortFunc(arr : number[]) {
   arr.sort ((a, b ) => a-b);
   
   const lowest1 : number = arr[0];
   const heigest1 : number = arr [arr.length - 1];
   const  averages1 : number = arr.reduce((a, b) => a + b) / arr.length;
   console.log(`${lowest1}, ${heigest1}, ${averages1} `);
 }
 
 getDortFunc([12, 5, 23, 18, 4, 45, 32]);

// without function
// const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

// const heigest = arr.reduce((a, b) => Math.max(a, b));
// const lowest = arr.reduce((a, b) => Math.min(a, b));
// const averages = arr.reduce((a, b) => a + b) / arr.length;

// console.log(`(${heigest}, ${lowest}, ${averages} )`);

// No 2.

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”


function concatenateWords(words: string[]): string {
  if (words.length === 0) {
      return "";
  }

  if (words.length === 1) {
      return words[0];
  }

  if (words.length === 2) {
      return words.join(" and ");
  }

  const allExceptLast = words.slice(0, words.length - 1).join(",");
  const lastWord = words[words.length - 1];

  return `${allExceptLast}, and ${lastWord}`;
}
const concatArr = ["apple", "banana", "cherry", "date"];
console.log(concatenateWords(concatArr));



// No 3.
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2


function findNumber (number:number[]): number | undefined {
    const newNumber = Array.from(number);
    newNumber.sort((a, b) => a - b);

    if(newNumber.length < 2){
        return undefined;
    }

    return newNumber[1];
}

const numb = [5, 3, 1, 7, 2, 6];
const scondNumb = findNumber(numb);
console.log(scondNumb);



// No 4.
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function sumArrays(arr3: number[], arr4: number[]): number[] {
  return arr3.map((value, index) => value + arr4[index]);
}

const arr0 = [1, 2, 3];
const arr9 = [3, 2, 1];
const summedArray = sumArrays(arr0, arr9);

console.log(summedArray);

// No 5.

//Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const addNewElement = (arr: number[], newElement:number) => {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
   return arr;
};

console.log(addNewElement([1,2,3,4],7));


// No 6.

// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3


// const sumNumberDataTypes = (arr: any[]) => {
//   let total: number = 0;

//   arr.forEach((value) => {
//     if (typeof value ==== "number") {
//       total += value;
//     }

// )
// }





// No 7.

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]









// No 8.

// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function cmbnArrays (arr1: number [], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = cmbnArrays(arr1, arr2);

console.log(combinedArray);

// No 9

// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

const showValues =(arr: number[]) => {
    const seen = new Set();


}






// No 10

// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function temukanPerbedaan(arr1: number[], arr2: number[]): number[] {
  // Temukan elemen yang ada di arr1 tetapi tidak di arr2
  const bedaArr1 = arr1.filter(elemen => !arr2.includes(elemen));
  
  // Temukan elemen yang ada di arr2 tetapi tidak di arr1
  const bedaArr2 = arr2.filter(elemen => !arr1.includes(elemen));
  
  // Gabungkan kedua hasil perbedaan
  return [...bedaArr1, ...bedaArr2];
}

const arr13 = [1, 2, 3, 4, 5];
const arr23 = [3, 4, 5, 6, 7];
console.log(temukanPerbedaan(arr13, arr23));



// No 11.
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]




// No 12. 
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40




// No 13. 
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
