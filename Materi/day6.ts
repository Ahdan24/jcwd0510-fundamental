// cara menuliskan object

// cara 1

const user = {};

// cara 2

const user2 = new Object();

// properties and method

interface user {
  nama: string;
  hobby?: string; //? = optional
  greet: () => void;
  greet2: () => void;
}

const user3 = {
  greet() {
    console.log("hello");
  },

  greet2: () => {
    console.log();
  },
};

// add and delete property

const person: any = {
  name: "joko",
  age: 20,
};

console.log(person);
person.hobby = "futsal";
console.log(person);
person.address = "jogja";
console.log(person);

//delete
delete person.hobby;
console.log(person);

// acessing value

console.log(person.name);
console.log(["joko"]);

person.hobby = "badminton";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

//=========imutable & mutable! ======

// 1.mutable: variable yg bisa diubah datanya {primitive data type}
// 2.imutable: variable yg tidak bisa di ubah saat datanya sudah dibuat {non primitive data type}

//mutable
const count1: number = 4;
let count2: number = count1;

console.log(count1);
console.log(count2);

//imutable

let orang1: any = { name: "budi" };
//let orang2 :any= orang1;

let orang2: any = { ...orang1 }; // agar properti 1 tidak terpengaruh

orang2.age = 20;

console.log(orang1);
console.log(orang2);

// Optional Chaining ================>

const user4: any = {};
console.log(user4.address);
console.log(user4.address?.city);

// for in ================>

const person3 = {
  name: "aceng",
  age: 90,
};
for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// desttructuring assignment =========
//mengeluarkan property dalam object menjadi sebuah variable

const person4 = {
  name: "aceng",
  age: 90,
  hobby: "main game",
};

const { name, age } = person4;
console.log(name);
console.log(age);

// versi array

const array = [10,20];
console.log(array[0]);
console.log(array[1]);

const[a,b] = array;
console.log(a);
console.log(b);

// spread operator
// digunakan untuk copy isi object/ menggabungkan object

const objectOne = {name: "jacky", password: "admin123"};
const objectTwo = {email: "mail@mail.com", name: "pepeng"};

const result = {...objectOne, ...objectTwo};

console.log(result);

// this keyword ====
//mengakses property lain dalam object

const person5 = {
    firstName: "aceng",
    lastName: "racing",
    greet() {
        console.log(`Hello ${this.firstName}, ${this.lastName}`);

    }
};


// class ===========
// template/ cetakan untuk membuat sebuah object

//class declaration

class User {
    greeting() {
        console.log("Helllo world");
        
    }
}

//class expresion

const User2 = class {
    greeting() {
        console.log("Helllo world")
    }
};

//creat an object from calss

const human = new User();
const human2 = new User();

human2.greeting();
human.greeting();

//contractor!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// CONSTRUCTOR ========================================================
// method bawaan dari class yang akan dijalankan pertama kali saat kalian
// membuat object baru menggunakan template class
// ACCESS MODIFIER -> public dan private

class Person {
  name: string;
  #email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  public greeting() {
    console.log(`Hello ${this.name}`);
    return `Hello ${this.name}`;
  }
  // method ini hanya bisa diakses di dalam class ini saja
  private showEmail() {
    console.log(this.#email);
  }
  sendReminder() {
    return this.showEmail();
  }
}
const orang3 = new Person("Budi", "budi@mail.com");
console.log(orang3.name);
// orang3.showEmail() // gak bakalan bisa krn showEmail adalah method private
// console.log(orang3.#email); // gak bakalan bisa karena email itu dibikin private
console.log(orang3.greeting());


// getter and setter
//get = baca data
//set = set value didalam object

const orang4 = {
  firstName: "ujang",
  lastName: "recing",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // add more logic
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
  fullName2(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};
console.log(orang4.fullName); // menggunakan getter
orang4.fullName = "Budi joko"; // menggunakan setter
console.log(orang4.fullName);
orang4.fullName2("Jecky siti"); // menggunakan method biasa
console.log(orang4.fullName);


// // Kapan Menggunakan Getter dan Setter?
// // Getter berguna ketika ingin mendapatkan nilai properti, tetapi kamu ingin menambahkan
// // logika (misalnya, format atau validasi).
// // Setter berguna ketika ingin memvalidasi atau menambahkan logika sebelum menetapkan
// // nilai ke properti.
// // Gunakan method biasa jika ingin tindakan lebih eksplisit atau jika fungsi tersebut
// // melakukan lebih dari sekadar mengambil atau menetapkan nilai properti.
// ENCAPSULATION ====================================================
// konsep di OOP untuk nge bundle data dalam 1 unit.
// contoh nya adalah class dan object
// INHERITANCE ========================================================
// pewarisan dari parent class ke child class.
// property dan method dari parent class bisa di akses oleh child class
class Product {
  productName: string;
  price: number;
  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }
  readPrice() {
    console.log(this.price);
    return "Rp " + this.price.toLocaleString("id-ID");
  }
}
// tidak menggunakan konsep inheritance
// class Book {
//   productName: string;
//   price: number;
//   author: string;
//   constructor(name: string, price: number, author: string) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }
// menggunakan konsep inheritance
class Book extends Product {
  author: string;
  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}
const buku = new Book("Cara jago ngoding", 100_000, "Aceng");
console.log(buku.productName);
console.log(buku.price);
console.log(buku.readPrice());
// INSTANCE OF ================================================
// mengecek apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal {}
class Tree {}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);


