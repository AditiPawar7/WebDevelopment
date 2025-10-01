// Print numbers from 1 to 10 using while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// Find the sum of digits of a number (123 → 1+2+3=6)
let num = 123;
let sum = 0;

while (num > 0) {
    sum += num % 10;          // last digit add करणे
    num = Math.floor(num / 10); // last digit काढणे
}

console.log("Sum of digits:", sum);



// Keep asking for a password until it is correct (simulate with attempts)
let correctPassword = "1234";
let attempt = "";
let tries = 0;

// simulate user input using array of attempts
let attempts = ["1111", "2222", "1234"]; 
let index = 0;

while (attempt !== correctPassword) {
    attempt = attempts[index];   // user input simulation
    console.log("Trying:", attempt);
    tries++;
    index++;
}

console.log("Password accepted after", tries, "attempt(s)");
