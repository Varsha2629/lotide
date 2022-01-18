const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];

    if(letter !== ' ') {

      if (results[letter]) {  
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }
      
    }
  }
  return results;
};

const testSentence = "lighthouse in the house";
console.log(letterPositions(testSentence));
module.exports = letterPositions;