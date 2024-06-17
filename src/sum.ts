export default function sum(...numbers: any[]) {

    // return numbers.reduce((total, number)=> total + number, 0)
    if (numbers.length === 0) return 0;

    const allNumbers = numbers.every((item) => typeof item === 'number');
    const allStrings = numbers.every((item) => typeof item === 'string');
    const mixedTypes = !allNumbers && !allStrings;

    if (mixedTypes) {
        throw new Error('Cannot process a mix of strings and numbers.');
    }

    if (allNumbers) {
        return numbers.reduce((total, number) => total + (number as number), 0);
    }

    if (allStrings) {
        return numbers.join('');
    }

    throw new Error('Unexpected input type');
}



// to run the vitest in the same file

if (import.meta.vitest) {
    const { describe, expect, it } = import.meta.vitest

    describe("#sum", () => {
        it("return 0 with no numbers", () => {
            expect(sum()).toBe(0)
        })

        it("returns same number with one number", () => {
            expect(sum(2)).toBe(2)
        })

        it("return the sum of all the numbers provided", () => {
            expect(sum(1, 2, 3)).toBe(6)
        })

        it("returns concatenation of all the strings", () => {
            expect(sum('a', 'b', 'c')).toBe('abc');
        })

        it("error when mixing strings and numbers", () => {
            expect(() => sum(1, 'b', 3)).toThrow('Cannot process a mix of strings and numbers.');
        })

        it("returns 0 with empty string input", () => {
            expect(sum('')).toBe('');
        })

        it("returns concatenated string with one string input", () => {
            expect(sum('test')).toBe('test');
        })

        it("returns concatenated string with multiple string inputs", () => {
            expect(sum('hello', ' ', 'world')).toBe('hello world');
        })

    })
}