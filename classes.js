"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car1 {
    model;
    constructor(model) {
        this.model = model;
    }
    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }
}
let car1 = new Car1("401");
car1.setModel = "12";
console.log(car1.getModel);
//# sourceMappingURL=classes.js.map