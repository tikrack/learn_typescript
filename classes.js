"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car1 {
    model;
    constructor(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
}
class Car2 {
    model;
    constructor(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
}
let car1 = new Car1("401");
let car2 = new Car2("206");
console.log(car1.getModel());
console.log(car2.getModel());
//# sourceMappingURL=classes.js.map