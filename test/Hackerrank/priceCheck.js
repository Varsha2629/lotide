
/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */

function priceCheck(products, productPrices, productSold, soldPrice) {

  let hash = {};
  let count = 0;

  for (let i = 0; i < products.length; i++) {

      if (!hash[products[i]]) {
          hash[products[i]] = productPrices[i]
      }
  }

  for (let j = 0; j < productSold.length; j++) {
      if (hash[productSold[j]] !== soldPrice[j]) {
          count++;
      }
  }

  return count;


}