let arr: number[] = [1,2,3,4,5,6,7,8,10];
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

const findThree: (number | undefined) = arr.find((element) => element === 6);
console.log("Array after find: ", findThree);

const findIndexOfThree: (number | undefined) = arr.findIndex((element) => element === 3);
console.log("Array after findIndex: ", findIndexOfThree);

const includeThree: (boolean | undefined) = arr.includes(3);
console.log("Array after include: ", includeThree);


// function processInput(input: string | number | boolean | number[]) {
//     if (typeof input === "string") {
//       return `String length: ${input.length}`;
//     } else if (typeof input === "number") {
//       return `Rounded number: ${Math.round(input)}`;
//     } else if (typeof input === "boolean") {
//       return input ? "Boolean is true" : "Boolean is false";
//     } else if (Array.isArray(input)) {
//       const sum = input.reduce((acc, num) => acc + num, 0);
//       return `Sum of array: ${sum}`;
//     }
//     else{
//       return 'else block'
//     }
//   }

//     function processInput(input: string | number | boolean | number[]): void {
//     if (typeof input === "string") {
//        console.log(`String length: ${input.length}`);
//     } else if (typeof input === "number") {
//       console.log(`Rounded number: ${Math.round(input)}`);
//     } else if (typeof input === "boolean") {
//       console.log(input ? "Boolean is true" : "Boolean is false");
//     } else if (Array.isArray(input)) {
//       const sum = input.reduce((acc, num) => acc + num, 0);
//       console.log(`Sum of array: ${sum}`);
//     }
//   }
   
//   console.log(processInput("Hello TypeScript"));
//   console.log(processInput(42.89));            
//   console.log(processInput(true));              
//   console.log(processInput([1, 2, 3, 4]));

// function processInput(input: number | string): string {
//     if (typeof input === "number") {
//         return `Number: ${input * 2}`;
//     }
//     else if (typeof input === "string") {
//         return `String: ${input.toUpperCase()}`;
//     }
//     else {
//         return '';
//     }
// }

// console.log(processInput(42));
// console.log(processInput("hello"));
// console.log(processInput(null));

export {}