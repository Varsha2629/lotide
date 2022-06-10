const arr = [5, 1, 3, 2, 6];

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
