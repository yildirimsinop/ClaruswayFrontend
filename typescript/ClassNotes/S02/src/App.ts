/* interface Person {
    name:string;
}

const person1: Person = {
    name:'Mark'
} */

/* interface Calender {
    events: string[];
    addEvents(event: string): void;
}


class LMSCalender implements Calender{
    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }
}

const cohort14= new LMSCalender(['HTML','JS'])


cohort14.addEvents('React')
cohort14.addEvents('TS')
cohort14.addEvents('NextJS')
console.log(cohort14) */

// interface Point {
//     x:number;
// }

// interface Point {
//     y:number;
// }

// const point1: Point = {x:50,y:30}


///Type Intersection
// type Pointx = {
//     x: number
// }

// type Pointy = {
//     y: number
// }

// type PointI = Pointx & Pointy

// const point2: PointI = {x:50,y:30}



// interface Color {
//     color: {r: number, g: number, b: number};
// }

// interface Shape {
//     area: number;
// }

// const red:Color = {color: {r: 255, g:0, b:0}}

// let shape1: Shape = {area:255}

// class Square implements Color, Shape {
//     constructor( public color: {r: number, g: number, b:number}, public area: number){
//     }
// }

// const sq = new Square(red.color , shape1.area)
// const sq2 = new Square( {r: 0, g:255, b:0} , 121)
// console.log(sq);