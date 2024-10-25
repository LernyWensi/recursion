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
