// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function groupedAnagrams(strings) {
    // sort each string
    let counter = {};
    let grouped = []
    for (let str of strings) {
        const sorted = [...str].sort().join('');
        if (!counter[sorted]) counter[sorted] = [str];
        else counter[sorted].push(str);
    }

    for (let value of Object.values(counter)) {
        grouped.push(value)
    }

    return grouped
}

console.log(groupedAnagrams(["eat", "tae", "tea", "eta", "aet", "ate"]))

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(N)
// Space Complexity: O(N)
function createCounter(arr) {
    let counter = {};

    for (let num of arr) {
        if (counter[num]) counter[num]++;
        else counter[num] = 1;
    }

    return counter
}

function sortObject(counter) {
    let counterArray = Object.entries(counter).map(element => +element[0]);

    counterArray.sort((a, b) => b[1] - a[1]);

    return counterArray
}

function topKFrequentElements(list, k) {
    const counter = createCounter(list);
    const sorted = sortObject(counter);

    return sorted.slice(0, k);
    
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
