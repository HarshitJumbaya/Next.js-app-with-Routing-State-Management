import sum from "./sum"

import {describe, expect, it} from "vitest"

describe("#sum", ()=> {
    it("return 0 with no numbers", ()=> {
        expect(sum()).toBe(0)
    })

    it("returns same number with one number", ()=> {
        expect(sum(2)).toBe(2)
    })

    it("return the sum of all the numbers provided", ()=> {
        expect(sum(1,2,3)).toBe(6)
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