// A number representing the sign of the given argument:

// If the argument is positive, returns 1.
// If the argument is negative, returns -1.
// If the argument is positive zero, returns 0.
// If the argument is negative zero, returns -0.
// Otherwise, NaN is returned.

const signNumber = (number) => {

  if(typeof(number) !== 'number'){
      return NaN; 
    } else if(1/number === -Infinity) {
      return -0;
    } else if(1/number === +Infinity){
      return +0;
    } else if(number < 0){
      return -1;
    } else if(number > 0){
      return 1;
    }
}
console.log(signNumber('6'));
console.log(signNumber(3));
console.log(signNumber(-3));
console.log(signNumber(0));
