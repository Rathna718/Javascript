for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (1 % 5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}