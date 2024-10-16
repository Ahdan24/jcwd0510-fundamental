// Promise dan async wait
function fectData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("Data berhasil diambil");
      } else {
        reject("terjadi kesalahan!");
      }
    }, 2000);
  });
}

// promise tanpa async wait

fectData()
  .then((data) => {
    console.log(data);
    return "apaapun itu biarlah";
  })

  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//menggunakan async wait

const getData = async () => {
  try {
    const data = await fectData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

//async function getData2() {}

// tanpa async wait

const fetchData2 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })

    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData2();

// menggunakan async await
//=================================================================//
const fetchData3 =async () => {
    try {
        const response =await
        fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
    }
}





//// JSON -> javascript object notation

// cara merubah object JSbiasa ke JSON
const user = {
  name: "budi",
  age: 40,
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

// JSON to Js Object
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

//modules

import{myFunc, name} from"./test";

myFunc() ;
console.log(name);

//HOISTING -> var & func declaration

 //func expression
// testFuncionExpression(); // gak bakalan bisa dipanggil sebelum penulisan function
const testFuncionExpression = () => {};

//func declaration
testFuncDeclaration();
function testFuncDeclaration() {}

