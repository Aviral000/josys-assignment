"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log("Original Array: ", arr);
// arr.push(11);
// console.log("Array after push: ", arr);
// arr.pop();
// console.log("Array after pop: ", arr);
// arr.unshift(0);
// console.log("Array after unshift: ", arr);
// arr.shift();
// console.log("Array after shift: ", arr);
// let mapArr: number[] = arr.map((element, index) => {
//     return element+(index+1);
// })
// console.log("Array after map: ", mapArr);
// let filterArr: number[] = arr.filter((element) => element % 2 === 0);
// console.log("Array after filter: ", filterArr);
// let reduceArr: number = arr.reduce((prev, element) => prev + element, 0);
// console.log("Array after reduce: ", reduceArr);
// arr.splice(5, 5);
// console.log("Array after splice: ", arr);
// const sliceArr: number[] = arr.slice(0, 3);
// console.log("Array after slice: ", sliceArr);
// arr.forEach((element, index) => {
//     setTimeout(() => {
//         console.log(element);
//     }, 250*(index+1));
// })
var findThree = arr.find(function (element) { return element === 6; });
console.log("Array after find: ", findThree);
var findIndexOfThree = arr.findIndex(function (element) { return element === 3; });
console.log("Array after findIndex: ", findIndexOfThree);
var includeThree = arr.includes(3);
console.log("Array after include: ", includeThree);
