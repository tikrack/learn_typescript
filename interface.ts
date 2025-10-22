interface Person {
    name: string | undefined;
    family: string | undefined;
    getName(): string | undefined;
}

class Alex implements Person {
    constructor(
        public name: string,
        public family: string,
    ) {}

    getName(): string | undefined {
        return this.name;
    }
}