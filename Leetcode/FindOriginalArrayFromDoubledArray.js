/**
 * @param {number[]} changed
 * @return {number[]}
 */
function findOriginalArray(changed) {
  let ans = [];
  let q = [];

  changed
    .sort((a, b) => a - b)
    .forEach((num) => {
      if (q.length > 0 && num === q[0]) {
        q.shift();
      } else {
        q.push(num * 2);
        ans.push(num);
      }
    });

  return q.length > 0 ? [] : ans;
}
