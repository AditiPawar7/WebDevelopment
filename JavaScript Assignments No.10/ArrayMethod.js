
// Empty array
let students = [];

// Add 5 student names using push()
students.push("Aditi");
students.push("Rohan");
students.push("Sneha");
students.push("Kiran");
students.push("Amit");

console.log("After push:", students);

// Remove last element using pop()
students.pop();
console.log("After pop:", students);



// 2. shift() and unshift()


let fruits = ["Apple", "Banana", "Mango"];

// Remove first element
fruits.shift();
console.log("After shift:", fruits);

// Add element at beginning
fruits.unshift("Orange");
console.log("After unshift:", fruits);


// 3. slice()
let numbers = [1,2,3,4,5,6,7,8,9,10];

// First 5 numbers
let firstFive = numbers.slice(0,5);
console.log("First 5:", firstFive);

// Last 3 numbers
let lastThree = numbers.slice(-3);
console.log("Last 3:", lastThree);

// 4. splice()

let arr = [10,20,30,40,50];

// Remove element at index 2
arr.splice(2,1);
console.log("After removing index 2:", arr);

// Insert two numbers at index 1
arr.splice(1,0,99,88);
console.log("After inserting at index 1:", arr);


// 5. concat()
// Concatenate numbers
let a1 = [1,2,3];
let a2 = [4,5,6];
let combined = a1.concat(a2);
console.log("Concatenated:", combined);

// Concatenate fruits and vegetables
let fruitsArr = ["Apple","Banana"];
let vegetablesArr = ["Carrot","Potato"];
let food = fruitsArr.concat(vegetablesArr);
console.log("Fruits + Vegetables:", food);

// 6. join()
// Characters to string
let chars = ['J','S'];
let str = chars.join('');
console.log("String:", str);  // "JS"

// Words with space
let words = ["JavaScript", "is", "fun"];
let sentence = words.join(" ");
console.log("Sentence:", sentence);  // "JavaScript is fun"

// 7. sort()
// Numbers ascending
let nums = [40,10,30,20,5];
nums.sort((a,b) => a-b);  // numeric ascending
console.log("Sorted numbers:", nums);

// Strings alphabetically
let names = ["Sneha","Aditi","Rohan","Kiran"];
names.sort();
console.log("Sorted names:", names);

// 8. reverse()
// Reverse array
let arr2 = [1,2,3,4,5];
arr2.reverse();
console.log("Reversed array:", arr2);

// Reverse characters and join
let letters = ['J','S'];
letters.reverse();
let revStr = letters.join('');
console.log("Reversed String:", revStr); // "SJ"

// 9. indexOf() and includes()
let numbersArr = [10,20,30,40];

// Find index of 30
console.log("Index of 30:", numbersArr.indexOf(30));

// Check if 50 is present
console.log("Includes 50:", numbersArr.includes(50));
