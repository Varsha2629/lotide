const dateFormat = (date) => {
  let d = date;
 
  let newMonth = ((d.getMonth() + 1) + 6 ) > 12 ? (( d.getMonth() + 7) -12) : + d.getMonth() + 7;
  let newYear = ((d.getMonth() + 7) > 12 ? d.getFullYear() + 1 : d.getFullYear())
  let month = newMonth <= 9 ? '0' + newMonth : newMonth;  
  let day = d.getDate() <= 9 ? '0' + d.getDate() : d.getDate();
  let year = newYear;
  let endDate = month + '/' + day + '/' + year;
  console.log(endDate);
return
}

let input = new Date("07-09-2022");

console.log(dateFormat(input));


//output:  05/07/2022
// return '0' + (d.getMonth() + 1) + '/0' + d.getDate() + '/' + d.getFullYear();

// sudocode:
// find what date after 6 month
//