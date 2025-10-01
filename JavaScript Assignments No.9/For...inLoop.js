// Car object
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Print properties using for...in
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Nested object
let student = {
    name: "Aditi",
    age: 21,
    address: {
        city: "Pune",
        pincode: 411001
    }
};

// Print nested object properties
for (let key in student.address) {
    console.log(key + ": " + student.address[key]);
}

// for...in on an array (prints indices)
let fruits = ["Apple", "Banana", "Cherry"];
for (let index in fruits) {
    console.log("Index:", index, "Value:", fruits[index]);
}
