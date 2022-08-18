const primeNumber = (n) => {
  let isPrime = true;
  for(let i = 2; i < n; i++){
    if(n % i === 0) {
      isPrime = false;
      break;
    }
    
  }
  if (!isPrime) {
    console.log(`${n} is a not prime number`);
  } else {
      console.log(`${n} is a prime number`);
    }
    
    return isPrime;
  }

console.log(primeNumber(34));