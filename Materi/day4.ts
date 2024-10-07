// ARRAY

//  const arr_ = [];  //cara 1
//  const arr_2 = new Array(); 

//  const arr_: string[] = ["A", "B", "C"];
//  const arr_2: string[] = new Array("A", "B", "C");

//  const arr3: number[] = [1, 2, 3, 4];
//  const arr4: number[] = new Array(1, 2, 3, 4);

//  //array of object =============

//  const students: { name: string; email: string }[] = [
//    { name: "budi", email: "budi@mail.com" },
//    { name: "siti", email: "siti@mail.com" },
//    { name: "joko", email: "joko@mail.com" },
//  ];

// PascalCase
// Singular
// interface Student {
//   name: string;
//   email: string;
// }

type Student = {
    name: string;
    email: string;
    hobby?: string; // optional
    address?: Address; // optional
  };
  
  interface Address {
    street: string;
    city: string;
  }
  
  const students: Student[] = [
    { name: "budi", email: "budi@mail.com", hobby: "Futsal" },
    {
      name: "siti",
      email: "siti@mail.com",
      address: {
        street: "Jalan xyz",
        city: "xyz",
      },
    },
    { name: "joko", email: "joko@mail.com" },
  ];
  
  // FOR OF ========================================
  // const fruits: string[] = ["Apple", "Banana", "Orange"];
  
  // for (const fruit of fruits) {
  //   console.log(fruit);
  // }
  
  // Exercise for of
  // hitung jumlah semua bilangan dalam array menggunakan for of
  // ex input = [1,2,3,4,5,6] -> 21
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  let total: number = 0;
  
  for (const number of numbers) {
    total += number;
  }
  
  console.log(total);
  
  // FUNCTION =================================
  // ada 2 cara untuk menuliskan fungsi
  
  // 1. function declaration
  function square(number: number) {
    return number * number;
  }
  
  const result = square(4);
  const result2 = square(10);
  
  console.log(result);
  console.log(result2);
  
  // 2. function expression
  const square1 = function (number: number) {
    return number * number;
  };
  
  const result3 = square1(4);
  const result4 = square1(10);
  
  console.log(result3);
  console.log(result4);
  
  // FUNCTION SCOPE ==============================
  // variable yang di define di dalam function hanya bisa diakses
  // di dalam function tsb
  
  // function greeting() {
  //   const hello = "Hello";
  //   console.log(hello); // ini bisa
  //   return hello;
  // }
  // // console.log(hello); // ini gak bakalan bisa
  
  // greeting();
  
  // PARAMETER & ARGUMENT =========================
  // parameter -> variable yang mewakili value dari
  // argument yg dimasukkan
  
  // argument -> value yang dimasukkan saat pemanggilan function
  
  //       parameter 👇
  function greeting(name: string) {
    const hello = "Hello";
    return hello + " " + name;
  }
  
  //            argument 👇
  console.log(greeting("Budi"));
  console.log(greeting("Siti"));
  console.log(greeting("Joko"));
  
  // DEFAULT PARAMETER ===========================
  
  function multiply(a: number, b: number = 1) {
    console.log(a);
    console.log(b);
    return a * b;
  }
  
  console.log(multiply(5, 70));
  console.log(multiply(5));
  
  // REST PARAMETER ==============================
  // mewakili sisa argument ke dalam 1 variable parameter
  
  function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
  }
  
  myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  
  // NESTED FUNCTION ==============================
  // fungsi yang berada di dalam fungsi
  // inner function bisa akses parameter dari outer function
  // outer function tidak bisa akses parameter dari inner function
  
  // outer function
  function getMessage(firstName: string) {
    // inner function 1
    function sayHello() {
      return "Hello " + firstName + ",";
    }
  
    // inner function 2
    function welcomeMessage() {
      return "Welcome to Purwadhika!";
    }
  
    return sayHello() + " " + welcomeMessage();
  }
  
  console.log(getMessage("Budi"));
  
  // CLOSURE ==========================================
  // inner function selalu mempunyai akses ke variable dan parameter dari outer function
  // bahkan setalah function tsb di return
  
  function greeting1(name: string) {
    const defaultMessage: string = "hello";
  
    return function () {
      return defaultMessage + " " + name;
    };
  }
  
  const result5 = greeting1("Budi");
  
  console.log(result5());
  
  // RECURSIVE ==========================================
  // fungsi yang memanggil dirinya sendiri
  
  function countDown(number: number) {
    console.log(number);
  
    let nextNumber = number - 1;
  
    if (nextNumber > 0) {
      countDown(nextNumber);
    }
  }
  
  countDown(10);
  
  // ARROW FUNCTION ====================================
  // shortcut untuk menuliskan function expression
  
  // contoh function expression
  const square2 = function (number: number) {
    return number * number;
  };
  
  // contoh jika diubah ke arrow function
  const square3 = (number: number) => {
    return number * number;
  };
  
  // kalo misalnya cuman 1 line bisa di bikkin kaya gini 👇
  const square4 = (number: number) => number * number;
  
  // ARRAY BUILD IN METHOD ============================
  // JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
  const words: string[] = ["hello", "world"];
  console.log(words.join(" "));
  
  // POP -> menghilangkan isi value paling akhir dalam array
  const words2: string[] = ["hello", "world", "hello"];
  words2.pop();
  console.log(words2);
  
  // SHIFT -> menghilangkan value paling depan dalam array
  const words3: string[] = ["test", "world", "hello"];
  words3.shift();
  console.log(words3);
  
  // PUSH -> menambahkan value ke dalam array di paling akhir
  const words4: string[] = ["hello", "world"];
  words4.push("purwadhika");
  console.log(words4);
  
  // UNSHIFT -> menambahkan value ke urutan paling depan array
  const words5: string[] = ["hello", "world"];
  words5.unshift("jogja");
  console.log(words5);
  
  // CONCAT -> menggabungkan 2 array menjadi 1 array
  const arr1: string[] = ["hello"];
  const arr2: string[] = ["world"];
  const arr3: string[] = ["world", "ssss"];
  
  console.log(arr1.concat(arr2));
  console.log(arr2.concat(arr1).concat(arr3));
  
  // another option
  const mergeArr = [...arr1, ...arr2, ...arr3]; // spread
  console.log(mergeArr);
  
  // SPLICE -> untuk menghapus, mengganti, atau menambahkan
  // value pada sebuah array
  // rumus -> splice(startIndex, brpYgMauDiDelete, item)
  
  const months: string[] = ["jan", "march", "april", "june"];
  
  months.splice(1, 0, "feb"); // menambahkan pada index 1
  console.log(months);
  
  months.splice(4, 1); // menghapus pada index 4
  console.log(months);
  
  months.splice(3, 1, "may"); // mengganti value pada index 3
  console.log(months);
  
  // SLICE -> mereturn array baru dengan value yang sudah ditentukan
  // index start dan index end dari array tsb
  // rumus: slice(startIndex, endIndex)
  
  const fruits: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
  console.log(fruits.slice(1, 4)); // dari depan
  console.log(fruits.slice(-4, -1)); // dari belakang
  
  // INDEXOF -> mencari index dari value yang kita search
  // kalo tidak ditemukan akan me return -1
  
  const fruits2: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
  console.log(fruits2.indexOf("Lemon"));
  
  // SORT -> mengurutkan isi array berupa string atau number
  // versi string
  const fruits3: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
  fruits3.sort();
  console.log(fruits3);
  
  // versi number tanpe compare function
  const points: number[] = [3, 5, 1, 9, 6, 2];
  points.sort();
  console.log(points);
  
  // versi number menggunakan compare function
  const points2: number[] = [3, 5, 1, 9, 6, 20];
  points2.sort((a, b) => a - b); // asc (kecil ke besar)
  // points2.sort((a, b) => b - a); // desc (besar ke kecil)
  console.log(points2);
  
  // REVERSE -> membalikkan urutan element dalam array
  const points3: number[] = [3, 5, 1, 9, 6, 20];
  points3.reverse();
  console.log(points3);
  
  // FOREACH -> melakukan looping pada array tapi tidak me-return apapun
  const fruits4: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
  
  const result6 = fruits4.forEach((fruit, index) => {
    console.log(index);
    console.log(fruit);
  });
  
  // MAP -> melakukan looping sama kaya forEach tapi mereturn array baru
  const fruits5: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
  
  const result7 = fruits5.map((fruit) => {
    return fruit;
  });
  
  console.log(result7);
  
  // FILTER -> melakukan looping juga sama kaya map dan menghasilan
  // array baru berdasarkan kondisi pada return function
  
  const ages: number[] = [32, 15, 29, 21, 40];
  const result8 = ages.filter((age) => {
    return age > 17;
  });
  
  console.log(result8);
  
  // FIND -> mencari value yang ditemukan pertama kali dalam array
  const ages2: number[] = [3, 15, 29, 15, 40];
  
  const result9 = ages2.find((age) => age > 14);
  
  console.log(result9);
  
  // FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
  const ages3: number[] = [3, 15, 29, 15, 40];
  
  const result10 = ages3.findIndex((age) => age > 14);
  
  console.log(result10);
  
  // REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada
  // tiap isi array
  
  const numbers1: number[] = [175, 50, 25, 50];
  
  const result11 = numbers1.reduce((a, b) => a + b);
  
  console.log(result11);
  
  // INCLUDES -> mengecek value pada array ada apa tidak.
  // Hasil return nya adalah boolean
  
  const fruits6: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
  
  console.log(fruits6.includes("Apple"));
  