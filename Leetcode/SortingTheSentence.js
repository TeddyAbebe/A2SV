var sortSentence = function (s) {
  s = s.split(" ");

  let temp = [];
  for (let i = 0; i < s.length; i++) {
    temp.push(s[i].split("").reverse().join(""));
  }

  temp.sort();

  result = [];
  for (let j = 0; j < s.length; j++) {
    result.push(temp[j].slice(1).split("").reverse().join(""));
  }

  return result.join(" ");
};

var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((word) => word.slice(0, word.length - 1))
    .join(" ");
};
