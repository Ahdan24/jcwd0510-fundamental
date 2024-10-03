//NO 1

const rectangleLenght: number = 5; //lenght
const renctangleWidth: number = 3; //Width
const area: number =( rectangleLenght * renctangleWidth);

console.log(area)

// NO 2

const Le: number = 5; //lenght
const Wi: number = 3; //width
const perimeter: number = (2* (Le + Wi));

console.log(perimeter);


// NO 3

const radius: number = 5;
const diameter: number = (2 * radius);
const keliling: number = (2 * 3.14 * radius);
const luas: number = (3.14 * radius * radius); 

console.log(`${diameter} diameter, ${keliling} keliling, ${luas} luas`);


//N0 4 

const a: number = 80;
const b: number = 65;
const derajat: number = 180
const angle: number = (derajat-(a+b));

console.log(angle)

//NO 5

const totalDays: number = 400;
const years: number = Math.floor(totalDays/365);
const months: number= Math.floor((totalDays % 365) / 30);
const day: number = Math.floor((totalDays % 365) % 30)

console.log(`${years} years, ${months} months, ${day} day`)

//NO 6


const date1 = new Date('2022-01-20');
const date2= new Date('2022-01-22');
const diffinMs: number = Math.abs(date1.getTime() - date2.getTime()); 
const milisecondinDays: number =(1000 * 60 * 60 * 24); 
const bedaHari: number = (diffinMs / milisecondinDays);

console.log(`perbedaan hari dari tanggal pertama dan kedua: ${bedaHari}`);

console.log(a);


