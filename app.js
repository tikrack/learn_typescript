"use strict";
// -------------------------Basic
Object.defineProperty(exports, "__esModule", { value: true });
let str = "Hello World!";
let int = 1;
let bool = false;
// -------------------------Array
let arr = ["TEst", "TEST", "test"];
let arr2 = ["Heloo", 10, true];
// -------------------------Tuple
let tuple = [10, "20"];
// -------------------------Specially
let nil = null;
let undef = undefined;
// -------------------------Union
let username = null;
username = "Hello";
let password = false;
password = 123456;
// -------------------------Void
//the voids function not return any things!
function log(message) {
    console.log(message);
}
// -------------------------Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Up;
// -------------------------Functions
function sum(x, y) {
    return x + y;
}
function firstWordFunc(x) {
    return x.split(" ")[0] ?? null;
}
let firstWordArrow;
firstWordArrow = (x) => {
    return x.split(" ")[0] ?? null;
};
// *****Optional Parameter
function print(x) {
    if (x) {
        alert(x);
    }
}
//# sourceMappingURL=app.js.map