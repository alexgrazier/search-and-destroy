'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  const midIndex = Math.floor(array.length / 2);
  const rootValue = array[midIndex];
  if (rootValue === target) {
    return true;
  }
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);
  if (target < rootValue) {
    if (leftArray.length < 2 && leftArray[0] !== target) {
      return false;
    }
    return binarySearch(leftArray, target);
  } else {
    if (rightArray.length < 2 && rightArray[0] !== target) {
      return false;
    }
    return binarySearch(rightArray, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
