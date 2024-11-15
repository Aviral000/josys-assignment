// type
// type annotation
// type: union and intersection
// type assertion
// type literals
// type optional
// generics
function Name(input) {
    console.log(typeof input);
    return input;
}
console.log(Name("Aviral"));
// console.log(Name(42));
// const Creator = <T>(element: T) => {
//     return element;
// }
// console.log(Creator("Aviral"));
// console.log(Creator(42));
// interface i1 {
//     name: string,
//     age: number
// }
// interface i2 extends i1 {
//     visa?: boolean
// }
// let user1: i2 = {
//     name: "Aviral",
//     age: 12,
//     visa: false
// }
// console.log(user1);
// interface s {
//     name: string,
//     class: boolean
// }
// interface s {
//     height: string,
//     job?: boolean
// }
// const user2: s = {
//     name: "Aviral",
//     class: true,
//     height: "179cm"
// }
// console.log(user2);
// let a: any;
// a = "Aviral";
// a = 12;
// console.log(typeof a);
// let b: unknown;
// b = "Aviral";
// console.log(b.toUpperCase());
// b = 12
// console.log(typeof b);
// enum Direction {
//     North,
//     South,
//     East,
//     West
// }
// const move = (direction: Direction) => {
//     console.log(`Moving ${Direction[direction]}`);
// };
// move(Direction.North);
