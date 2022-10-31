

/*
 * Complete the 'pthFactor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER n
 *  2. LONG_INTEGER p
 */

function pthFactor(n, p) {
  // Write your code here
  let bF = [];
  let quotient = n + 1;
  for (let factor = 1; factor < quotient; factor++) {
      if (n % factor === 0) {
          quotient = n / factor;
          p--;
          if (p <= 0) return factor;
          if (factor >= quotient) break;
          bF.push(quotient);
      }
  }
  return bF[bF.length - p] ?? -1;
  

}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pthFactor(n, p);

  ws.write(result + '\n');

  ws.end();
}
