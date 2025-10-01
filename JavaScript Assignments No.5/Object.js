// Student object
let student = {
    name: "Aditi",
    age: 21,
    marks: 88
};

// Print properties using for...in
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Nested object
let student2 = {
    name: "Rohan",
    age: 22,
    address: {
        city: "Pune",
        pincode: 411001
    }
};
console.log("City:", student2.address.city); // Pune
