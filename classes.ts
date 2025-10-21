class Car1 {
    public model: string;

    constructor(model: string) {
        this.model = model;
    }

    getModel() {
        return this.model;
    }
}

class Car2 {
    constructor(public model: string) {}

    getModel() {
        return this.model;
    }
}

let car1 = new Car1("401");
let car2 = new Car2("206");

console.log(car1.getModel());
console.log(car2.getModel());