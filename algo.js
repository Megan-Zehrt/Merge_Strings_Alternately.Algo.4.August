// 1768. Merge Strings Alternately



// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.







/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let string = "";

    // Use the maximum length to ensure we loop through all characters of both words
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            string += word1[i];
        }
        if (i < word2.length) {
            string += word2[i];
        }
    }

    return string;
};