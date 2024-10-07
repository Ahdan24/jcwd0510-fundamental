// NO 1

// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

const angka1: number = 2;

if (angka1 % 2 == 0) {
  console.log(" is even.");
} else {
  console.log(" is odd");
}

// No 2

// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

const number: number = 6;
let isPrime: boolean = true;

if (number === 1) {
  console.log("1 is not prime number.");

} else if (number > 1) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else console.log(`${number} is a not prime number`);
} else {
  console.log(`${number} is a not prime number`);
}

//no 3

// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

const num: number = 5;
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("The sum of N numbers:", sum);

// No4

// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

const factorial: number = 4;

if (factorial < 0) {
  console.log("Error! Factorial for negative number does not exist.");
} else if (factorial === 0) {
  console.log(`The factorial of ${factorial} is 1.`);
} else {
  let fact = 1;

  for (let j = 1; j <= factorial; j++) {
    fact *= j;
  }
  console.log(`The factorial of ${factorial} is ${fact}.`);
}

//n0 5

// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

const N2: number = 15;
let n1: number = 0;
let n2: number = 1;
let nextTerm: number;

for (let i = 1; i <= N2; i++) {
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
let sum2: number = 0;
for (let i = 0; i < n1; i++) {
  sum += i;
}
console.log(n1);
