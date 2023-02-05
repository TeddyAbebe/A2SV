/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let hIndex = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      hIndex = i + 1;
    } else {
      break;
    }
  }
  return hIndex;
};
