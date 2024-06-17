export default function sum(...numbers: number[]){
    return numbers.reduce((total, number)=> total + number, 0)
}


// to run the vitest in the same file

if(import.meta.vitest){
    const {describe, expect, it} = import.meta.vitest

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
    })
}