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
}
let car1 = new Car();
car1.setModel = "12";
console.log(car1.model);
//# sourceMappingURL=classes.js.map