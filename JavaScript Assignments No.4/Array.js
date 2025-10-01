// Array of 5 student names
let students = ["Aditi", "Rohan", "Sneha", "Amit", "Kiran"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Find maximum number from an array
let numbers = [12, 45, 7, 89, 23];
let maxNum = Math.max(...numbers);
console.log("Maximum:", maxNum); // 89

// Remove duplicate values
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log("Unique Array:", uniqueArr); // [1,2,3,4,5]
