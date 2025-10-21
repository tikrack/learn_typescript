// -------------------------Basic

let str: string = "Hello World!"
let int: number = 1
let bool: boolean = false

// -------------------------Array

let arr: string[] = ["TEst", "TEST", "test"]

let arr2: any[] = ["Heloo", 10, true]

// -------------------------Tuple

let tuple: [number, string] = [10, "20"]

// -------------------------Specially

let nil: null = null
let undef: undefined = undefined

// -------------------------Union

let username: string | null = null
username = "Hello"

let password: number | boolean = false
password = 123456

// -------------------------Void

//the voids function not return any things!
function log(message: string): void {
    console.log(message)
}

// -------------------------Enum
enum Direction {
    Up = 1,
    Down = 4,
    Left = 3,
    Right
}

let dir: Direction = Direction.Up

// -------------------------Functions
function sum(x :number, y :number) :number {
    return x + y
}

function firstWordFunc(x: string) :string | null {
    return x.split(" ")[0] ?? null
}

let firstWordArrow : (x :string) => string | null

firstWordArrow = (x) => {
    return x.split(" ")[0] ?? null
}
// *****Optional Parameter
function print(x ?:string) {
    if (x) {
        alert(x)
    }
}

// *****Rest Parameter
function printInt(x :number, ...y: number[]) {
    console.log(x, y)
}
