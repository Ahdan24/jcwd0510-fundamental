// Exercise 1

// ● Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

function areObjectsEqual(obj1: any, obj2: any): boolean {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(areObjectsEqual({ a: 2 }, { a: 1 }));
console.log(areObjectsEqual({ a: "Hello" }, { a: 1 }));
console.log(areObjectsEqual({ a: 1 }, { a: 1 }));

// Exercise 2

// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

const intersection = (obj1: any, obj2: any) => {
  let duplicate = {};
  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }
  return duplicate;
};
const obj3 = { a: 1, b: 2, c: 10 };
const obj4 = { a: 1, b: 2, c: 1 };
console.log(intersection(obj3, obj4));

// Exercise 3

// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :

// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }

interface Merge {
  name: string;
  email: string;
}

const objectOne = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

//console.log(objectOne);

const objectTwo = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

//console.log(objectTwo);

const mergeObjct = [...objectOne, ...objectTwo];
//console.log(mergeObjct);
const uniqueObj: Merge[] = [];

mergeObjct.forEach((obj) => {
  if (!uniqueObj.some((unique) => unique.name === obj.name)) {
    uniqueObj.push(obj);
  }
});

console.log(uniqueObj);

// Exercise 4

// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

const switchKeyToValue = (data: any[]) => {
  const result: any[] = [];
  data.forEach((item) => {
    let temp: any = {};
    for (let key in item) {
      temp[item[key]] = key;
    }
    result.push(temp);
  });
  return result;
};
console.log(
  switchKeyToValue([
    { name: "David", age: 20 },
    { name: "David", age: 20 },
  ])
);

// Exercise 5

// ● Create a function in type script to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

const factorial = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);
    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial(5);
console.log(steps.join(" x ") + " = " + total);
