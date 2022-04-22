export class Robot {
    private _name: string;
    private static _assignedNames: Set<string> = new Set();

    constructor() {
        this._name = this.generateRandomName();
        
    }

    public get name(): string {
        return this._name;
    }

    public resetName(): void {
        this._name = this.generateRandomName();
    }

    public static releaseNames(): void {
        Robot._assignedNames.clear();
    }

    private generateRandomName(): string {
        const ALPHABET = Array(26)
            .fill(97)
            .map((x, y) => String.fromCharCode(x + y).toUpperCase());
        const NUMBERS = Array(10).fill(0).map((x, y) => x + y);

        let name: string = '';

        while (Robot._assignedNames.has(name) || !name) {
            name = '';
            name += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
            name += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

            name += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
            name += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
            name += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        }

        Robot._assignedNames.add(this._name);

        return name;
    }
}