class Student {
    fullName: string;
    constructor(public firstName: string,  middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person : Person, middleInitial: any) {

    if(middleInitial){
      return "Hello, " + person.firstName + " " + middleInitial + " " + person.lastName;
    }else{
      return "Hello, " + person.firstName + " " + person.lastName;
    }
}

let user = new Student("Amit", "K.", "Verma");

document.body.innerHTML = greeter(user, "K.");


class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

//console.log(employee);


let x: [string, number];

x=["Hello", 9];

//console.log(x[0].substr(1));

x[2] = "Amit";

//console.log(x[1].toString());

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
//let strLength: number = (someValue as string).length;

//console.log(strLength);

let i:number;

for (i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000 * i);
}

//Sum of two array

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

console.log(sumMatrix([[12,13],[2,3]]));

//OOPS in TS

class Greeters {
     greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting} `;
    }
}

let greeters = new Greeters("world");

console.log(greeters.greet());


class Animals {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animals {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animals {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animals = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Private modifiers

class Animalp {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}


class Horsep extends Animalp {
    constructor() { super("Horse"); }

}

let testprivate = new Horsep(); 

console.log(testprivate);