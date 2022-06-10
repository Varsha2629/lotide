// const arr = [5, 1, 3, 2, 6];
const users = [
  { firstName: "Sachin", lastName: "Panchal", age: 20 },
  { firstName: "Varsha", lastName: "Panchal", age: 70},
  { firstName: "Bhoomi", lastName: "patel", age: 50 },
  { firstName: "Isha", lastName: "nagrani", age: 20 },
];

function findSum(arr) {
  let sum = 0;
  for(let i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

const outPut = arr.reduce(function(acc, curr) {
  acc = acc + curr
  return acc;
}, 0);

const output = users.reduce(function (manup, curr){
  if (manup[curr.age]) {
    manup[curr.age] = ++manup[curr.age];
  } else {
    manup[curr.age] = 1;
  }
  console.log(manup);
  return manup;
}, {});
