// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n*m)?
// Space Complexity: O(n+n)?
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
    // can I use forEach instead?
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
    // let freqMap = new Map();
    // let freqList = new Array(list.length + 1).fill([]);

    // console.log(freqList)

    // for (let num of list) {
    //     if (freqMap.has(num)) {
    //         freqMap.set(num, freqMap.get(num) + 1);
    //     } else {
    //         freqMap.set(num, 1);
    //     }
    // }

    // console.log(freqMap);

    // // for (const key in freqMap) {
    // //     console.log(freqList[freqMap[key]]);
    // //     freqList[freqMap[key]].push(key);
    // //     console.log(freqList)
    // // }
    // for (let [key, value] of freqMap) {
    //     freqList[value].push(key);

    // }

    // console.log(freqList)

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

    console.log(buckets);
    // fetch the larget frequest bucket first, until reach k
    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        if (buckets[i] !== null) ans.push(...buckets[i]);
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
