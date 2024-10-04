// ARRAY

// cara penulisan array
const arr = [];
const arr1 = new Array(); 

const arr2: string[] = ["A", "B", "C"];
const arr3: string[] = new Array ("A", "B", "C");

const arr4: number[] = [1, 2, 3, 4]
const arr5: number[] = new Array (1,2,3,4)

// array of object




type students = {
    name: string;
    email: string;
    hobby?: string;
};

const students: student[] = [
    {name: "budi", email:"budi@mail.com", hobby: "futsal"}
    {
        name: "siti",
         email:"siti@mail.com",
        address:{
           street: " jalan xys",
           city: "xyz"
        }
    }
    {name: "joko", email:"joko@mail.com"}
]

// =========FOR OF

const fruits: string[] = ["Apple, Banana, Orange"];

for (const fruit of fruits) {
    console.log(fruit);
    
}

// Exercise for of
// Hitung jumlash semua bilangan dalam array menggunakan for of
//Ex: [1,2,3,4,5,6,] -> 21

const numbers: number[] = [1,2,3,4,5,6];
let total: number = 0;

for (const number of numbers) {
    total += number;
}
console.log(numbers);


//  ============== FUNCTION ============ //

// 2 CARA MENULISKAN FUNGSI

// - 1. FUNCTION DECLARATION

        // SYNTAX //
    function square(number: number) {
        return number * number;

        const result = square(4);

        console.log(result);
        
    }    
// -2. FUNCTION EXPRESSION

        // SYNTAX //

        const square1 = function (number : number) {
            return number * number;
        };

        const result = square1(7);

        console.log(result);


        // =========Function Scoop=======//
        // variable yg di define di dalam function hanya bisa di akses di dalam function

        function greeting() {
            const hello: "hello";
            console.log(hello); // ini bisa karena masih didalam {}
            return hello;
        }
        //console.log(hello); ini tidak bisa karena diluar {}
    greeting(); // untuk pemanggilan function
        

    //  ===PARAMETER DAN ARGUMENT=======
    // parameter => variable yg mewakili value dari argument yg dimasukan
    // argument => value yg dimasukan saat pemanggilan function
            // paramater
    function greeting2(name2: string) {
        const hello = "hello";
        return hello + " " + name2;
    }
            // Argument
    console.log(greeting2("budi"));
    console.log(greeting2("siti"));
    console.log(greeting2("joko"));

    // default parameter

    function multiply(a:number, b: number =1) {
        console.log(a);
        console.log(b);
        return a*b;
    }
    console.log(multiply(3, 3));
    console.log(multiply(6));
    

//  rest parameter+==
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b:number, ...manyMore: number[]);

console.log(a);
console.log(b);
console.log(manyMore);

myFunc(1,2,3,4,5,6,7,8,9,10)

// nested function
//fungsi yg berada di dalam fungsi
//inner function bisa akses parameter dari outer function
//outer function tidak bisa diakses paramater dari inner function

        // outer function
function getMessage(firstName: string) {
    //inner function1
    function sayHello(){
        return "hello" + firstName + ","
    }
    function welcomeMessage() {
        return "welcome to purwadhika";
    }
    return sayHello() + " " + welcomeMessage() ;
}
console.log(getMessage("budi"));


//  closure

//inner function selau mempunyai akses ke variable dan paramater dari outer  function bahkan setelah function tsb di return

function greeting1(name:string) {
    const defaultMessage: string = "hello";

    return function () {
        return defaultMessage + " " + name;
    };
}
const result5 = greeting1("budi");
console.log(result5());


// Recursive ============

// fungsi yg memanggil dirinya sendiri

function countDown(number: number) {
    console.log(number);
    let nextNumber = number - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(10)


// Arrow function
//shortcut untuk menuliskan expression function

//expression
const square2 = function (number : number) {
    return number * number;
};

//diubah ke arrow
const square3 = (number: number) => {
    return number * number;
}

// kalo misal cuman 1 line bisa dibikin seperti ini

const square4 = (number: number) => number* number;


// Array buid in method ==================

// join -> menggabubgkan value array ke dalam bentuk string

const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// pop -> menghilangkan isi value yg paling akhir dalam array

const words2: string[] = ["hello", "world", " hello"];
words2.pop();
console.log(words2);

//shift -> menghilangkan value paling depan

const word3: string[] = ["test", "world", " hello"];
word3.shift();
console.log(word3);

//push ->  menambahkan value ke dalam array di paling akhir

const words4: string[] = ["hello", "world"];
words4.push("purwadhika");
console.log(words4);

//unshif

const words5: string[] = ["hello", "world"];
words5.unshift("jogja");
console.log(words5);

// concat
// menggabugkan 2 array menjadi 1 array

const arru: string[] = "hello";
const arr5: string[] = "world";

console.log(arr4.concat(arr5));



// splice untuk menambahkan mengganti atau menghapus values dari sebuah array

// rumus= splice(sTrtindex, berapaYgMaudHapus, item)

//belum dicatat//






// slice -> mereturn array baru denga value yg sudah ditentukan index start dan index end dari array tsb
// rumus: slice(startindex, indexend)

const buah: string[] = ["Apple","banana", "orenge", "lemon", "lemon", "manggo"]
console.log(buah.slice(1,4));

//index of mencari index dari value yg kita cari kalo tidak ditemukan akan me return -1

const buah1: string[] = ["Apple","banana", "orenge", "lemon", "lemon", "manggo"]
console.log(buah1.indexOf(1,4));

//sort -> mengurutkan array berupa string atau number

const buah2: string[] = ["manggo","Apple","banana", "orenge", "lemon", "lemon"]
buah2.sort()
console.log(buah2.sort());

//versi number tanpa compare function

const points: number[] = [3,5,1,6,2];
points.sort();
console.log(points);

// versi number menggunakan comapare fungction
const points2: number[]= [3,5,1,9,6,20];
points2.sort((a,b) => a-b);

console.log(points2);

//reverse membalikanurutan element dalam array

const points3: number[]= [3,5,1,9,6,20];
points3.reserve();

console.log(points3);

// foreach -> melakukan looping pada array tapi tidak me return apapun

//map -> melakukan looping sama kaya foreach tapi mereturn array baru

//filter ->  melakukan looping sama seperti map dan menghasilkan array baru berdasarkan kondisi pada return function

const ages: number[] = []


// find -> mencari value yg ditemukan pertama kali pada array
const ages2: number[]=[3,15,29,15,40];
const result9 = ages2.find((age)=> age >14);

console.log(result9);

//findindex mirip kaya find tapi yg dihasilkan adalh indexnya

const ages3: number[]=[3,15,29,15,40];
const result10 = ages3.find((age)=> age >14);

console.log(result10);

//Reduce -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array

const numbers1: number[]= [175, 50, 25]

const result11 =





