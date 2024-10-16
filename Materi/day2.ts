//IF STATMENT
//Syntax
//if(condition) {
// codeblock
//}

const age: number = 17;

if (age >= 17) {
  console.log("Anda bisa buat KTP"); //True
}

const age2: number = 16;
if (age >= 17) {
  console.log("Anda masih dibawah umur"); //false
}

// ====== Else Statment
// backup plan sari if statment

const age3: number = 17;
if (age3 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("anda belum bisa buat KTP");
}

// ===== Else If statment

const input: string = "A";
const grade: string = input.toLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// =============Switch case

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari senin");
    break;
  case "rabu":
    console.log("Hari senin");
    break;
  default:
    console.log("hari tidak ditemukan");
    break;
}

// ================ LOGICAL OPERATOR

// && = AND
// || = OR
// ! = NOT

//OR

const car: string = "mercy";

if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

//And = Harus bernilai true agar meghasilkan nilai true

const umur: number = 19;
const punyaSIM: boolean = true;
// True           True                   = True
if (umur >= 18 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

//Not = membalikan niali boolean

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// =============== Ternary operator

const str: string = "typescript";

if (str === "javascript") {
  console.log("jzavascript");
} else {
  console.log("not java script");
}

//ternary operator
console.log(str === "javascript" ? "java script" : "not javascript");

//  LOOP STATMENT (PERULANGAN)

// rangkaian instruksi yg dilakukan hingga kondisinya tidak terpenuhi

// type loop: mempunyai 3 statment
// - statment1 :menginisialisasikan variable dari looping itu sendiri
// - statment2 :mdendefine kondisi looping tersebut
// - statment3 :kode yg di eksekusi di akhir setiap iterasi

for (let i = 0; i < 5; i++) {
  console.log("helo world");
}

// while loop

let i: number = 1;

while (i < 10) {
  console.log("hello world");
  i++;
}

// do while loop

let count: number = 1;

do {
  console.log("ini iterasi ke:" + count);
  count++;  
} while(count<=5);

//  ============ BREAK
// untuk menghentikan loop

let sum: number = 0;
while (true) {
  console.log("sum : " + sum);

  if (sum >=5) break;

  sum++;
  
}

// ================= continue

// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i===3) continue;

  console.log(i);
  
} 
