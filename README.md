# Recursion

This project is a part of [The Odin Project's JavaScript course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).

## Overview

The Recursion project is a simple TypeScript program designed to demonstrate the concept of recursion through various algorithms. This project includes implementations of common recursive algorithms, such as calculating Fibonacci numbers and sorting arrays using merge sort.

## Examples

-   **Fibonacci Sequence**

    -   **Recursion**

    ```typescript
    const fibR = (n: number): number[] => {
        if (n <= 0) return [];
        if (n == 1) return [0];

        const fibR = (n: number): number => {
            if (n === 0) return 0;
            if (n === 1) return 1;
            return fibR(n - 1) + fibR(n - 2);
        };

        return Array.from(Array(n), (_, idx) => fibR(idx));
    };

    console.log(`fibR(0):`, fibR(0)); // Output: []
    console.log(`fibR(1):`, fibR(1)); // Output: [0]
    console.log(`fibR(2):`, fibR(2)); // Output: [0, 1]
    console.log(`fibR(5):`, fibR(5)); // Output: [0, 1, 1, 2, 3]
    console.log(`fibR(10):`, fibR(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    ```

    -   **Iterative**

    ```typescript
    const fib = (n: number): number[] => {
        if (n <= 0) return [];
        if (n == 1) return [0];

        const seq = [0, 1];

        for (let i = 1; i < n - 1; i += 1) {
            seq.push(seq[i - 1] + seq[i]);
        }

        return seq;
    };

    console.log(`fib(0):`, fib(0)); // Output: []
    console.log(`fib(1):`, fib(1)); // Output: [0]
    console.log(`fib(2):`, fib(2)); // Output: [0, 1]
    console.log(`fib(5):`, fib(5)); // Output: [0, 1, 1, 2, 3]
    console.log(`fib(10):`, fib(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    ```

-   **Merge Sort**

```typescript
const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1 || arr.length === 0) return arr;

    const pivot = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, pivot));
    const right = mergeSort(arr.slice(pivot));

    const merged = Array(left.length + right.length);

    let leftIndex = 0;
    let rightIndex = 0;
    let mergedIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        left[leftIndex] < right[rightIndex] ?
            (merged[mergedIndex++] = left[leftIndex++])
        :   (merged[mergedIndex++] = right[rightIndex++]);
    }

    while (leftIndex < left.length) {
        merged[mergedIndex++] = left[leftIndex++];
    }

    while (rightIndex < right.length) {
        merged[mergedIndex++] = right[rightIndex++];
    }

    return merged;
};

console.log(`mergeSort([]):`, mergeSort([])); // Output: []
console.log(`mergeSort([5]):`, mergeSort([5])); // Output: [5]
console.log(`mergeSort([3, 1]):`, mergeSort([3, 1])); // Output: [1, 3]
console.log(`mergeSort([4, 2, 7, 1]):`, mergeSort([4, 2, 7, 1])); // Output: [1, 2, 4, 7]
console.log(`mergeSort([10, -1, 2, 5, 0]):`, mergeSort([10, -1, 2, 5, 0])); // Output: [-1, 0, 2, 5, 10]
```
