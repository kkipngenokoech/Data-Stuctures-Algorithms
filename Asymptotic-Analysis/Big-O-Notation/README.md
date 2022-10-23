# Big O Notation

we can use Big O to  describe the overall performance of an algorithms.

Big O is short hand of order of, algorithm's rate of growth in terms of time taken to execute(runtime) and space it takes up in the memory.

Big O can be used to find out worst-case-scenario, upper bound of an algorithm - absolute most number of operations that an algorithm will need to take when it executes

Big-O notation represents the upper bound of the running time of an algorithm. Thus, it gives the worst-case complexity of an algorithm.

Big O answers one simple question - can your algorithm scale up to deal with large data sets?

## O(1) Time

this means constant time, no matter how big our dataset is it will always have a constant time.

```text
function returnFirstArray(myArray){
    return myArray[0]
}
```

no matter the size of the dataset, it will always return the first element of the dataset, hence constant time.

## O(N) Time

this is linear time. The larger the dataset, the longer the algorithm time O(N) it will take to execute, but the increase in time will be constant(gradient).
example here is an algorithm/function that loops through dataset.

## O(N²) & O(2ⁿ) Time

quadratic time complexity. A prime example of O(N²) is using a nested loop with a data set.

exponential time complexity. O(2ⁿ)

## O(log(N)) & O(Nlog(N)) Time

O(log(N)) is known as logarithmic time while O(Nlog(N) is known as linear logarithmic time.

If we see an algorithm where the size of the data set is halved each time, it is likely using O(log(N)). (Binary tree search).

merge sort and quick sort algorithms both use linear logarithmic time (O(Nlog(N)). They are considered among the most efficient algorithms for sorting and are commonly used in the real world.

## efficient time complexities

1. O(1) - constant time
2. O(log(N)) - logarithmic time
3. O(N) - linear time

## less efficient

1. O(N log(N)) - linear logarithmic time

## inefficient

1. O(N²) - quadratic time
2.O(2ⁿ)  - exponential time
