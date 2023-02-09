/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let charMap = new Map();
  let start = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(start, charMap.get(s[i]) + 1);
    }
    charMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}
