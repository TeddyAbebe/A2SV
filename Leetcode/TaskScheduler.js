/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = new Map();
  for (const task of tasks.values()) {
    map.set(task, 1 + (map.get(task) || 0));
  }

  const queue = [];
  for (const [ch, count] of map.entries()) {
    const item = { ch, count, nextIndex: -1 };
    queue.push(item);
  }
  queue.sort((A, B) => B.count - A.count);

  let result = 0;
  for (let i = 0; queue.length; i++, result++) {
    let useMe = null,
      j = 0;
    for (; j < queue.length; j++) {
      const item = queue[j];
      if (item.nextIndex <= i) {
        useMe = item;
        break;
      }
    }

    if (useMe) {
      useMe.count--;
      useMe.nextIndex = i + (1 + n);

      if (useMe.count === 0) {
        queue.splice(j, 1);
      } else {
        let low = j + 1,
          high = -1 + queue.length;
        if (queue[high].count >= useMe.count) {
          queue.splice(j, 1);
          queue.push(useMe);
        } else {
          while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const midVal = queue[mid].count;
            if (midVal < useMe.count) high = mid;
            else low = 1 + mid;
          }
          for (let k = j; k < high - 1; k++) {
            queue[k] = queue[k + 1];
          }
          queue[high - 1] = useMe;
        }
      }
    }
  }

  return result;
};
