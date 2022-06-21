const fs = require('fs');

function readFileData() {
  try {
    const data = fs.readFile('./text.txt', 'utf8', function(err,data){

          console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
}
readFileData();