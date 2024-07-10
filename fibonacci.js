export function fibonacci(n) { // n is the nth number in the Fibonacci sequence
    try{
        if(n<0 || n>1476)  
          throw new Error("Operation not feasible"); // Handling the error caused by numbers less than 0 and greater than 1476
    }
    catch(error){
          console.error(error)
    }
      if (n<1 || n>1476) return 0; 
    let previous = 1; // second number in the fibonacci sequence
    let current = 1; // third number in the fibonacci sequence

    for (let i = 2; i < n; i++){
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

// console.log(fibonacci(45)); // checking the output of the function

// by Arnold Weasly and Valentine Kiguli