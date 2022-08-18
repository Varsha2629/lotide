// Given a number, print out a multiplication table up to and including that number

// table(3)

// let x = [[1, 2, 3],
// [2, 4, 6],
// [3, 6, 9]]

const table = (x) => {
		
  let result = [[]];
  for(let i = 1; i <= x; i++){
      let arr = [];
  	for(let j = 1; j <= x; j++){
    		arr.push(i * j);

    }
    result.push(arr);
  }

  return result;
}
console.log(table(4));

// Test Practice: 

// let vs const
//  dangerouslySetInnerHTML   in react
// redux, when should I use it in my react.js project
// =================
// center text vartically and horizontaly
// body {
//   width: 100%;
//   height: 100%;
// }
// #root {
//   width: 100%;
//   height: 100%;

//   display: flex;
//   justify-content: center;
//   align-item: center;
// }
// =================
//

