const users = [
  { firstName: "Sachin", lastName: "Panchal", age: 20 },
  { firstName: "Varsha", lastName: "Panchal", age: 70},
  { firstName: "Bhoomi", lastName: "patel", age: 50 },
  { firstName: "Isha", lastName: "nagrani", age: 20 },
];
// const output = arr.map((x) => x.toString(2));  // for binary value
// console.log(output);

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);

// o/p: ['Sachin', 'Isha']