console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1;  i <= 100; i+= 2) {
    console.log(i)
}

// For exercise 1, I wrote a shorter version of the code.
// I did not use an if else statement but if I did, it would look like this:

// for(let i = 0; i< 100; i++;) {
// if(i % 2 == 0) {
//    continue;
//} else {
//   console.log(i);
//}
//}
//}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if(i % 3 == 0) {
            console.log(i, "FIZZ");
        } else if(i % 5 == 0) {
            console.log(i, "BUZZ");
        } else {
            console.log(i);
        }
    }
}



// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
//while loop:

let i = 1;

while (i <= 100) {
    let output = "";
    
    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++
}

//do-while loop:

let x = 1;

do {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${x} ${output}`);

    x++;
    } while (i <= 100) {
        let output = "";
        
        if (i % 3 == 0) {
            output += "FIZZ";
        }
    
        if (i % 5 == 0) {
            output += "BUZZ";
        }
    
        console.log(`${i} ${output}`);
    
        i++
    }

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <=n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }

    if (i == n) {
        console.log(`Did not find ${numberToFind} within 1-${n}..`);
    }
}


/*
//2. Re-implement exercise 2, but use `start` as the initial value for `i`,
 `n` as the range limit in `i <= n`, 
 and `fizzDivisor` and `buzzDivisor` as the dependent values for determining 
 "FIZZ" and "BUZZ" print messages.
*/
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);








