// console.log('Hello World');
// const button = document.getElementById('submit');
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result');
// function add(a: number, b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(+a.value, +b.value)}`;
// });
// Type Annotation
/* let x : number = 5
let y = 'Hello World'
y = x

let z;

z = false
z = 5
z = 'Hello World'

x = z */
//Data types
// Array
/* let num : number[] = [1,'string',false]

let a: string[] = []
let b = []

a.push('5')
a.push(5)

b.push('5')
b.push(5)

 */
//Tuples
let myTuple;
myTuple = [13.4, false, 'Hello World'];
//Tuple Array
let arrTuples;
arrTuples = [[1, 'Mark'], [2, 'Anthony']];
arrTuples.push([3, 'Ethan']);
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 105] = "Blue";
    Color[Color["Yellow"] = 106] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color.Yellow);
console.log("XS" /* Tshirt.XSmall */);
