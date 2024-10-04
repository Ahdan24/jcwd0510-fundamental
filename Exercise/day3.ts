// 1. git add .
// 2. git commit -m "Exercise day 3"
// 3. git push origin main

// =============EXERCISE============ //

// NO 1

// Write a code to display the multiplication table of a given integer.
//○ Example : Number → 9
//○ Output :
//■ 9 x 1
//■ 9 x 2
//■ ...
//■ 9 x 10

const y: number = 9;

for (let j = 1; j <= 10; j++) console.log(y + "*" + j + "=" + y * j);

// NO 2

// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

const original: string = "madam";
const reserved: string = original.split("").reverse().join("");

if (original === reserved) {
  console.log("is a palindrom");
} else {
  console.log("is not palindrom");
}

// NO 3

//Write a code to convert centimeter to kilometer.
//○ Example : 100000 → “1 km”

const meter: number = 100_000;
const kiloMeter: number = meter / 100_000;

console.log(`${kiloMeter} Km`);

// NO 4

//Write a code to format number as currency (IDR)
//○ Example : 1000 → “Rp. 1.000,00”

const uang: number = 1000;

let rupiah: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(uang);
console.log(rupiah);


// NO 5

//Write a code to remove the first occurrence of a given “search string” from a string
//○ Example : string = “Hello world”, search string = “ell” → “Ho world”

const string: string = "Hello World";
const searchString: string = "ell";

console.log(string.replace(searchString, ""));

//NO 6

// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

const input: string = "hello world";
const words = input.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

// NO 7

//Write a code to swap the case of each character from string
//○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const input1: string = "The QuiCk BrOwN Fox Satu EmPat SemBilAn";
let x: string = "";

for (let i = 0; i < input1.length; i++) {
  const char = input1[i];

  if (char === char.toUpperCase()) {
    x += char.toLowerCase();
  } else {
    x += char.toUpperCase();
  }
}
console.log(x);

//NO 8

// Write a code to find the largest of two given integers
//○ Example : num1 = 42, num2 = 27 → 42

const num1: number = 42;
const num2: number = 27;

let largestNumber: number;

if (num1 > num2) {
  largestNumber = num1;
} else {
  largestNumber = num2;
}

console.log(largestNumber);

// NO 9

// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

const num3: number = 42;
const num4: number = 27;
const num5: number = 18;

const numbers = [num3, num4, num5];
const sortedNumbers = numbers.sort();

console.log(sortedNumbers.join(", "));

// NO 10

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

const inputSntc: string = "hello";

let output: number;

if (typeof inputSntc === "string") {
  output = 1;
} else if (typeof inputSntc === "number") {
  output = 2;
} else {
  output = 3;
}

console.log(output);

// NO 11

// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const letter: string = "An aplle a day keeps the doctor away";

console.log(letter.replaceAll(/a/gi, "*"));
