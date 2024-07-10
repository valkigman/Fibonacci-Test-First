export function fibonacci(n) {
    try{
        if(n<=0 || n>1477)
          throw new Error("Operation not feasible"); // Handling the error caused by numbers less than 0 and greater than 1477
    }
    catch(error){
          console.error(error)
    }
      if (n<=1 || n>1477) return 0;
    let previous = 0; // first number in the fibonacci sequence
    let current = 1; // second number in the fibonacci sequence

    for (let i = 2; i < n; i++){
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

// console.log(fibonacci(7)); // checking the output of the function