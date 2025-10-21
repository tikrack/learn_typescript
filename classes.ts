abstract class Model {
    public model: string = "";

    set setModel(model: string) {
        this.model = model;
    }

    get getModel() {
        return this.model;
    }
}

class Car extends Model {

}

let car1 = new Car();
car1.setModel = "12"
console.log(car1.model);