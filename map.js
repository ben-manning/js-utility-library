// The map() method creates a new array populated with the 
// results of calling a provided function 
// on every element in the calling array.

const multiply = (num) => {
  return num * num;
}

const map = (inputArray, cbFunction) => {
  let newArray = [];
  for(let i = 0; i < inputArray.length; i++) {

    newArray.push(cbFunction(inputArray[i]));
  }
  return newArray;
}



console.log(map([1,2,3], multiply));