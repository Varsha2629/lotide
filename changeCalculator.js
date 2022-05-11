const changes = {
  "Twenty dollars": 2000,
  "Ten dollars": 1000,
  "Five dollars": 500,
  "Two dollars": 200,
  "One dollar": 100,
  Quarter: 25,
  Dime: 10,
  Nickel: 5,
  Penny: 1,
};

const calculateChange = (total, cash) => {
  let totalAmount = cash - total;
  let result = {};

  for (let key in changes) {
    let totalChange = Math.floor(totalAmount / changes[key]);
    if (totalChange > 0) {
      result[key] = totalChange;
      totalAmount = totalAmount % changes[key];
      if (totalAmount === 0) {
        break;
      }
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
