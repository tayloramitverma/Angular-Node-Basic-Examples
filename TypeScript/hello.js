var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person, middleInitial) {
    if (middleInitial) {
        return "Hello, " + person.firstName + " " + middleInitial + " " + person.lastName;
    }
    else {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
}
var user = new Student("Amit", "K.", "Verma");
document.body.innerHTML = greeter(user, "K.");
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
//console.log(employee);
var x;
x = ["Hello", 9];
//console.log(x[0].substr(1));
x[2] = "Amit";
//console.log(x[1].toString());
var someValue = "this is a string";
var strLength = someValue.length;
//let strLength: number = (someValue as string).length;
//console.log(strLength);
var i;
for (i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 1000 * i);
}
//Sum of two array
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
console.log(sumMatrix([[12, 13], [2, 3]]));
//OOPS in TS
var Greeters = /** @class */ (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return "Hello, " + this.greeting + " ";
    };
    return Greeters;
}());
var greeters = new Greeters("world");
console.log(greeters.greet());
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animals));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animals));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// Private modifiers
var Animalp = /** @class */ (function () {
    function Animalp(theName) {
        this.name = theName;
    }
    return Animalp;
}());
var Horsep = /** @class */ (function (_super) {
    __extends(Horsep, _super);
    function Horsep() {
        return _super.call(this, "Horse") || this;
    }
    return Horsep;
}(Animalp));
var testprivate = new Horsep();
console.log(testprivate);
