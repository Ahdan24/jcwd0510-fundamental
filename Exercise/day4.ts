// No 1

// ● Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters : height → triangle height

function createTrianglePattern(height: number) {
  let number = 1;

  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      if (number >= 10) {
        row += number;
      } else {
        row += `0${number} `;
      }

      number++;
    }

    console.log(row);
  }
}
createTrianglePattern(4);

// No 2

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n: number) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join(", ");
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(15));

// NO 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function findBMI(weight: number, height: number): string {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi < 40.0) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

const weight = 60; // Kg
const height = 1.75; // M
console.log(findBMI(weight, height));

// no 4

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const rmvOdd: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = rmvOdd.filter((rmvOdd) => {
  return rmvOdd % 2 === 0;
});

console.log(result);

// N0 5

//● Write a function to split a string and convert it into an array of words
//○ Example : “Hello World” → [“Hello”, “World”]

// cara 1

// function wordLimits(words: string): string[] {
//     const wordLimit = words.split(' ')
//     const wordlimit2 = wordLimit.filter(word => word.length > 0)

//     return wordlimit2;
// }
// const words3 = " Hello world";
// const wordArray = wordLimits(words3)

// console.log(wordArray);

// cara2

function wordLimit(words: string): string[] {
  return words.split(" ").filter((word) => word);
}
const words3 = "Hello World";
const wordArray = wordLimit(words3);

console.log(wordArray);
