/* interface Person {
    name:string;
}

const person1: Person = {
    name:'Mark'
} */

interface Calender {
    events: string[];
    addEvents(event: string): void;
}


class LMSCalender implements Calender{
    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }
}