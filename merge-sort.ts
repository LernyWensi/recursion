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
