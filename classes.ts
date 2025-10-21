class Car1 {
    public model: string;

    constructor(model: string) {
        this.model = model;
    }

    get getModel() {
        return this.model;
    }

    set setModel(model: string) {
        this.model = model;
    }
}

let car1 = new Car1("401");
car1.setModel = "12"
console.log(car1.getModel);