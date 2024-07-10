export function fibonacci(n) {
    if (n<2) return 0;
    let previous = 0; // first number in the fibonacci sequence
    let current = 1; // second number in the fibonacci sequence

    for (let i = 2; i < n; i++){
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

// console.log(fibonacci(3)); // checking the output of the function