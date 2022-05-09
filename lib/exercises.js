// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(1)
// Space Complexity: O(n)
function groupedAnagrams(strings) {
  anagramDict = {};
  anagramsArray = [];

  for (let word of strings) {
    let temp = word.split("").sort().join("");
    if (anagramDict.hasOwnProperty(temp)) {
      anagramsArray[anagramDict[temp]].push(word);
    } else {
      anagramDict[temp] = anagramsArray.length;
      anagramsArray[anagramDict[temp]] = [word];
    }
  }

  return anagramsArray;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n)
function topKFrequentElements(list, k) {
  let frequency = {};

  for (let num of list) {
    if (num in frequency) {
      frequency[num] += 1;
    } else {
      frequency[num] = 1;
    }
  }

  const freqArray = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  const sortArray = freqArray.map((element) => parseInt(element[0]));
  return sortArray.slice(0, k);
}

// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function validSudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  groupedAnagrams,
  topKFrequentElements,
  validSudoku,
};
