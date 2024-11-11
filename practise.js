// object literal

// const objectName = {
//     key1: "value1",
//     methodName() {

//     }
// }

// let rectangle = {
//     length: 10,
//     breath: 5,
//     area() {
//         return this.length * this.breath;
//     }
// }

// console.log(rectangle.area());

// let rectangle2 = {
//     length: 10,
//     breath: 5,
//     area() {
//         return this.length * this.breath;
//     }
// }

// objectName.methodName()

// car -> name, model, year, engine

// factory function

// function createRectangle(length, breath) {
//     return rectangle = {
//         length, breath
//     }
// }

// let rectangleObj = createRectangle(10, 5);

// console.log(rectangleObj);

// constructor function

// function Car(brand, model , year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;

//     this.start = function() {
//         console.log(`${this.brand} - ${this.model} started`)
//     }
// }

// const car1 = new Car("Hundai", "i20", 2018);

// console.log(car1.constructor === Car);
// car1.start();
// // console.log(Car.constructor);

// let Car2 = new Function('brand', 'model' , 'year', `this.brand = brand; this.model = model; this.year = year;this.start = function() { console.log("Hi") }`);

// let car3 = new Car2("Hundai", "i20", 2018);

// car3.start();

// prototype where we dont require this keyword??

// // prototype
// function Car(brand) {
//     this.brand = brand;
// }

// // add new method to the prototype of all Car instances
// Car.prototype.name = function() {
//     console.log(`${this.brand}`);
// }

// const car1 = new Car("BMW");
// car1.__proto__;
// // console.log(car1.__proto__);

// let myArray = ["1", "2", "3"];
// console.log(myArray.__proto__);

// const animal = {
//     type: "Mammal",
//     eat() {
//         console.log("eating");
//     }
// }

// const dog = Object.create(animal);
// dog.name = "Buddy";
// dog.bark = function() {
//     console.log("barking");
// };
// dog.bark();