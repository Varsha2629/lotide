'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

async function getStockInformation(date) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
    
   https.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`, (resp) => {

        let data = '';
      
        resp.on('data', (chunk) => {
            data += chunk;
        });
       
        resp.on('end', () => {
            return JSON.parse(data).data[0];
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    
}
async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const date = readLine().trim();

  const result = await getStockInformation(date);
  const isEmpty = !Object.keys(result).length;
  if (isEmpty) {
      ws.write('No Results Found');
  } else {
      ws.write(`Open: ${result.open}\n`);
      ws.write(`High: ${result.high}\n`);
      ws.write(`Low: ${result.low}\n`);
      ws.write(`Close: ${result.close}\n`);
  }
}