// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n*m)
// Space Complexity: O(n+n) -> O(n)
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
// Time Complexity: O(n)
// Space Complexity: O(n+n+n) -> O(n)
function topKFrequentElements(list, k) {

    let counts = new Map();
    let buckets = [];
    for (let i = 0; i <= list.length; i++)
        buckets.push([]);
    
    // count frequent of the elements
    for (let num of list) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    } 
    // put them into buckets by frequent
    for (let [key, value] of counts) {
        buckets[value].push(key);
    }

    // fetch the larget frequest bucket first, until reach k
    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        if (buckets[i].length !== 0) ans.push(...buckets[i]);
    }

    if (ans.length > k) {
        while (ans.length !== k) {
            ans.pop();
        }
    }

    return ans;
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: O(n^2) -> O(1) because of fixed board size
// Space Complexity: O(n^2) -> O(1) because of fixed board size
function validSudoku(board) {
    let store = {
        rows: {},
        cols: {},
        square: {},
      };
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const box = board[i][j];
    
          if (!store["rows"][i] && box !== ".") {
            store["rows"][i] = [];
            store["rows"][i].push(box);
          } else if (box !== "." && !store["rows"][i].includes(box)) {
            store["rows"][i].push(box);
          } else if (store["rows"][i] && store["rows"][i].includes(box)) {
            return false;
          }
    
          if (!store["cols"][j] && box !== ".") {
            store["cols"][j] = [];
            store["cols"][j].push(box);
          } else if (box !== "." && !store["cols"][j].includes(box)) {
            store["cols"][j].push(box);
          } else if (store["cols"][j] && store["cols"][j].includes(box)) {
            return false;
          }
    
          const squareRowId = Math.ceil((i + 1) / 3);
          const squareColId = Math.ceil((j + 1) / 3);
          const squareId = `${squareRowId}-${squareColId}`;
    
          if (!store["square"][squareId] && box !== ".") {
            store["square"][squareId] = [];
            store["square"][squareId].push(box);
          } else if (box !== "." && !store["square"][squareId].includes(box)) {
            store["square"][squareId].push(box);
          } else if (
            store["square"][squareId] &&
            store["square"][squareId].includes(box)
          ) {
            return false;
          }
        }
      }
      return true;
    
}

module.exports = {
  groupedAnagrams,
  topKFrequentElements,
  validSudoku
};
