"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    model = "";
    set setModel(model) {
        this.model = model;
    }
    get getModel() {
        return this.model;
    }
}
class Car extends Model {
    money(value) {
        return value;
    }
}
let car1 = new Car();
car1.setModel = "12";
console.log(car1.model);
//# sourceMappingURL=classes.js.map