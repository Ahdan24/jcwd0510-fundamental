//NO 1

// ● Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 15

const rectangleLenght: number = 5; //lenght
const renctangleWidth: number = 3; //Width
const area: number =( rectangleLenght * renctangleWidth);

console.log(area)

// NO 2

// ● Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 16

const Le: number = 5; //lenght
const Wi: number = 3; //width

const perimeter: number = (2* (Le + Wi)); // formula

console.log(perimeter);


// NO 3

// Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

const radius: number = 5;

const diameter: number = (2 * radius);
const keliling: number = (2 * 3.14 * radius);
const luas: number = (3.14 * radius * radius); 

console.log(`${diameter} diameter, ${keliling} keliling, ${luas} luas`);

//N0 4 

// Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65
// ○ Output : 35

const a: number = 80;
const b: number = 65;
const derajat: number = 180
const angle: number = (derajat-(a+b));

console.log(angle)

//NO 5

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

const totalDays: number = 400;
const years: number = Math.floor(totalDays/365);
const months: number= Math.floor((totalDays % 365) / 30);
const day: number = Math.floor((totalDays % 365) % 30)

console.log(`${years} years, ${months} months, ${day} day`)

//NO 6

// Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
// ○ Output : 2


const date1 = new Date('2022-01-20');
const date2= new Date('2022-01-22');
const diffinMs: number = Math.abs(date1.getTime() - date2.getTime()); 
const milisecondinDays: number =(1000 * 60 * 60 * 24); 
const bedaHari: number = (diffinMs / milisecondinDays);

console.log(`perbedaan hari dari tanggal ke-1 dan ke-2: ${bedaHari}`);



