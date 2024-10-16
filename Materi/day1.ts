//Contoh penulisan Typescript

const message: string = "Hello World";


//string buid in method

const nama: string = "SitI Khodijah";
const nama2: string = " Metal";
const nama3: string = " Banget";

console.log(nama.toLowerCase()); // Cara langsung
console.log(nama.toUpperCase()); // Cara langsung
console.log(nama.replace("S","o")); // Cara langsung
console.log(nama.replaceAll("i", "o")); // Cara langsung
console.log(nama.replaceAll(/i/gi,"o")); //g=global char i= case sensitive
console.log(nama.split(" ")); // Cara langsung
console.log(nama.split("")); // Cara langsung
console.log(nama.concat(nama2).concat(nama3));// Cara langsung
console.log(nama.slice(0, 3)); // Cara langsung

// ======template literal / template string

const nama4: string = "jack";
const message1: string = `Welcome ${nama4}`;
console.log(message1);


//  =====Number buid in method

const angka: string= "2000";

console.log(typeof Number(angka)); 
console.log(typeof angka);//cek types data
console.log(typeof parseInt(angka)); 
console.log(Number. MAX_VALUE); 
console.log(Number. MIN_VALUE); 

// ===========type convertion

// -string convertion
// Merubah tipe data number ke string!//

const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString())

//boolean Convertion

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean("False"))


//======= Date data types
const now: Date = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);//bulan diawali dari 0
console.log(now.getDate());//bulan diawali dari 0

//Set Method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now)

//===== Basic operator
// + penambahan
// - pengurangan
// * perkalian
// / pembagian
// % sisa bagi
// ** pangkat

const a = 20;
const b = 10;
const c = a+b;
console.log(c);

console.log(1+1);
console.log(2-1);
console.log(2*4);
console.log(4/2);
console.log(9%2);
console.log(3**2);

// modify in place

let n: number= 4;
n += 2; //Shortcut

// n = n + 2 //cara panjang

console.log(n);


//========increment dan decrement

let counter = 2;
// counter++; // increment
counter--; //decrement

console.log(counter);

//==== Postfix & Prefix

let counter2: number = 2;

//console.log(++counter2);
console.log(counter2++);

//====== Comparison operator

//console.log(5=="5");// pengecekan valuenya saja
//console.log(5==="5");// pengecekan value dan tipe data

console.log(5>2);
console.log(5<2);
console.log(5<=5);
console.log(5<5);
console.log(5>=5);

//============ Math

//- Math ceil = membulatkan angka keatas
console.log(Math.ceil(4.2));

//- Math floor = membulatkan angka ke bawah

console.log(Math.floor(4.9));

//- Math around membulatkan angka terdekat
console.log(Math.round(4.9));

//Math max = mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,2,3,4,5,6,7,8));

//Math min = mengembalikan angka terkeci; dari sekumpulan angka
console.log(Math.min(1,2,3,4,5,6,7,8));

//Math abs = menghilangkan tanda negatif
console.log(Math.abs(-11));

//Math random = menghasilkan angka acak antara 0 dan 1
console.log(Math.random());


