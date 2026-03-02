// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass 
// the test implemented by the provided function.

const numIsOdd = (num) => {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

const filter = (inputArr, cbFunction) => {
  let filteredArray = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (cbFunction(inputArr[i])) {
      filteredArray.push(inputArr[i]);
    }
  }

  return filteredArray;
}

console.log(filter([2,4,6,7,9], numIsOdd))