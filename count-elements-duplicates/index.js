//Count Elements Duplicates
const array = [1, 1, 2, 3, 2];

const countDuplicate = (arr) => {
  arr.sort();
  let counts = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      if (counts[counts.length - 1] !== arr[i]) {
        counts.push(arr[i]);
      }
    }
  }
  return counts.length;
};

console.log(countDuplicate(array));
