// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function groupedAnagrams(strings) {
    let freqMap = new Map();

    let result = [];
    for (let word of strings) {
        let count = new Array(26).fill(0);
        for (let char of word) {
            count[char.charCodeAt(0) - 97] += 1;
        }

        if (freqMap.get(count.toString())) {
            freqMap.get(count.toString()).push(word);
        } else {
            freqMap.set(count.toString(), [word]);
        }
    }
    for (let list of freqMap.values()) {
        result.push(list);
    }
    return result;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function topKFrequentElements(list, k) {
    throw new Error("Method hasn't been implemented yet!");
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
  validSudoku
};
