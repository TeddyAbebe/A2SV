var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const result = [curr];
  for (let i = 1; i < intervals.length; i++) {
    const currRight = curr[1];
    const [nextLeft, nextRight] = intervals[i];
    if (currRight >= nextLeft) {
      curr[1] = Math.max(currRight, nextRight);
    } else {
      result.push(intervals[i]);
      curr = intervals[i];
    }
  }
  return result;
};
