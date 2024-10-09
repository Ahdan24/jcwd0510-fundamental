// No 1 ====================================

const sortFunction = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  const lowest: number = arr[0];
  const highest: number = arr[arr.length - 1];
  const sum: number = arr.reduce((a, b) => a + b);
  const average: number = sum / arr.length;

  //   return { lowest: lowest, highest: highest, average: average };
  return { lowest, highest, average };
};

console.log(sortFunction([3, 2, 7, 4, 1]));

const sortFunction2 = (arr: number[]) => {
  let lowest: number = arr[0];
  let highest: number = arr[0];
  let sum: number = 0;

  for (const num of arr) {
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }

  const average = sum / arr.length;

  return { lowest, highest, average };
};

console.log(sortFunction2([3, 2, 7, 4, 1]));

// No 2
const concatWords = (words: string[]) => {
  if (words.length === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }
};

console.log(concatWords(["apple", "banana", "cherry", "date"]));

// No 3
const secondSmallest = (arr: number[]) => {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }

  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[1];
};

console.log(secondSmallest([5, 9, 2, 3, 1]));

// No 4
const calculateArr = (arr1: number[], arr2: number[]) => {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const sum = arr1[i] + arr2[i];
    result.push(sum);
  }

  return result;
};

console.log(calculateArr([1, 2, 3], [3, 2, 1]));

// No 5
const addNewElement = (arr: number[], newElement: number) => {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }

  return arr;
};

console.log(addNewElement([1, 2, 3, 4], 7));

// No 6

const sumNumberDataTypes = (arr: any[]) => {
  let total: number = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      total += value;
    }
  });

  return total;
};

console.log(sumNumberDataTypes(["3", 1, "string", null, false, undefined, 2]));

// No 7
const limitData = (maxSize: number, ...integers: number[]) => {
  const result: number[] = [];

  integers.forEach((integer) => {
    if (result.length === maxSize) return;
    result.push(integer);
  });

  return result;
};

console.log(limitData(8, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// No 8
const combineArray = (arr1: number[], arr2: number[]) => {
  return [...arr1, ...arr2];
};

console.log(combineArray([1, 2, 3], [4, 5, 6]));

// No 9
const showDuplicateValues = (arr: number[]) => {
  const seen = new Set();

  const duplicate: number[] = [];

  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }
  }

  return duplicate;
};

console.log(showDuplicateValues([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// No 10

const findDifference = (arr1: number[], arr2: number[]) => {
  const difference: number[] = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  return difference;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// No 11
const filterPrimitiveDataTypes = (arr: any[]) => {
  return arr.filter((value) => {
    return (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean" ||
      typeof value === "undefined" ||
      value === null
    );
  });
};

console.log(filterPrimitiveDataTypes([1, [], undefined, {}, "string", {}, []]));

// No 12
const sumDuplicateValues = (arr: number[]) => {
  const seen = new Set();
  const duplicate = new Set();

  for (const value of arr) {
    if (seen.has(value)) {
      duplicate.add(value);
    } else {
      seen.add(value);
    }
  }

  let result: number = 0;

  for (const value of arr) {
    if (duplicate.has(value)) {
      result += value;
    }
  }

  return result;
};

console.log(sumDuplicateValues([10, 10, 10, 10, 20, 30, 40, 20]));

// No 13
const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choices: ("rock" | "paper" | "scissor")[] = [
    "rock",
    "paper",
    "scissor",
  ];

  const computer = choices[Math.floor(Math.random() * 2.9)]; // random index antara 0-2

  if (player === computer) {
    return { result: "Draw", computer, player };
  }

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return { result: "Win", computer, player };
  }

  return { result: "Lose", computer, player };
};

console.log(rockPaperScissor("paper"));