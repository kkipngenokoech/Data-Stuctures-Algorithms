// problem Big_OH_notation 1
function findFirstIndexOfNumber(number, array) 
{
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return i;
      }
    }
    return -1
}

// the Big O notation is linear time O(N) - This algorithm needs to loop through the array until it finds the first occurrence of the number we are looking for(it only have to loop through each element only once.)

// problem Big_OH_notation 2
function findEachIndexOfNumber(number,array) 
{
    let arrayOfIndexes = [];
    array.forEach(function(element, index) {
      if (element === number) {
        arrayOfIndexes.push(index);
      }
    });
    return arrayOfIndexes;
}

// the Big O notation is O(N) - This algorithm needs to loop through each element only once.

// problem Big_OH_notation 3
const array = [36, 14, 1, 7, 21];

function higherOrLower(array)
{
  if (array[array.length -1 ] > array[0]) 
  {
    return "Higher";
  }
  else if (array[array.length -1 ] < array[0]) 
  {
    return "Lower";
  }
   else 
   {
    return "Neither";
  }
}

// the Big O notation is O(1) The algorithm just needs the first and last element in the array to calculate the answer. This algorithm is O(1) constant time.

// problem Big_OH_notation 4
const arrayTwo = [1,2,3,4,5,6,7,8];
function determineSumOfSequentialArray(array) 
{
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
       sum += array[i];
   }
   return sum;
}
// the Big O notation is O(N) - This algorithm needs to loop through  As the data set grows, the time it takes to loop through the data set will also grow in a linear fashion. This algorithm is O(N), it loops through the array only once though.

// problem Big_OH_notation 5
const arrayThree = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) 
{
  return array.length * (array.length + 1)/2;
}

// the Big O notation is O(1) - No matter how big the size of the data set, our algorithm is simply doing a single computation. Because arrays have an inherent length property, there are no extra operations for larger arrays.