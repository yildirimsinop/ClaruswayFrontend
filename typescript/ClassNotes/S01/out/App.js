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
/* let myTuple: [number, boolean,string];
myTuple = [13.4,false,'Hello World']; */
//Tuple Array
/* let arrTuples: [number,string][];

arrTuples = [[1, 'Mark'],[2, 'Anthony']]

arrTuples.push([3,'Ethan'])
 */
//Enums
/* enum Color {
    Red,
    Green = 100,
    Blue = Green +5,
    Yellow,
}

console.log(Color.Green)
console.log(Color.Blue)
console.log(Color.Yellow)

//String Enum
const enum Tshirt {
    XSmall = 'XS',
    Small = 'S',
    Medium = 'M'
}

console.log(Tshirt.XSmall)


//Mix Enum

enum Mixed {
    Red,
    Green,
    Blue = 'Mavi',
    Yellow = 'Sari',
    Magenta = 120,
    Brown,

} */
// Any & unknown
/* let a: any = 'Hello'

let b:number = a

let c : unknown = 5

let d: number = c as number

let e: any = c */
//void
/* function myFunction ():number {
    console.log('Hello World')
    return 3
} */
// Union type & Type narrowing
/* function checkNumber (n:(string | number)):string{

    
    //type narrowing
    if (typeof n === 'number'){

        n

    }else{

        n.

    }
    return 'Hello'
}


let xyz : string | boolean = '0';
xyz = 'Hello'
xyz = true
xyz = 3 */
//Aliases
/* type Check = string | number

let f: Check;
f = 0,
f = 'Merhaba'
f= false

let g :string | number
let h :string | number
let i :Check */
//String literals
// type Car = 'BMW' | 'Audi' 
// let car1: Car = 'BMW'
// let car2: Car = 'BMW'
// let car3: Car = 'Fiat'
//? Object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    sunroof: false,
    age(CurrentYear) {
        console.log(`age=${CurrentYear - this.year}`);
    }
};
//?Intersection
