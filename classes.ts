abstract class Model {
    public model: string = "";

    set setModel(model: string) {
        this.model = model;
    }

    get getModel() {
        return this.model;
    }

    abstract money(value: number) :number
}

class Car extends Model {
    money(value: number) {
        return value;
    }
}

let car1 = new Car();
car1.setModel = "12"
console.log(car1.model);