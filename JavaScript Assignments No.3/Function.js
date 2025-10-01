// Function that adds two numbers
function add(x, y) {
    return x + y;
}
console.log("Addition:", add(5, 7));  // 12

// Anonymous function to multiply two numbers
let multiply = function(x, y) {
    return x * y;
};
console.log("Multiplication:", multiply(4, 6));  // 24

// Arrow function to find square
let square = (n) => n * n;
console.log("Square:", square(5));  // 25

// Function with default parameters
function greet(name = "Student") {
    console.log("Hello, " + name + "!");
}
greet();        // Hello, Student!
greet("Aditi"); // Hello, Aditi!
