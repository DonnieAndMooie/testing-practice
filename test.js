import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './code.js'

test("Lowercase string gets capitalized", () => {{
    expect(capitalize("hello")).toBe("Hello")
}})

test("Uppercase string", () => {
    expect(capitalize("HELLO")).toBe("HELLO")
})

test("Lowercase string reverses", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test("Uppercase string reverses", () => {
    expect(reverseString("GOODBYE")).toBe("EYBDOOG")
})

test("String with symbols reverses", () => {
    expect(reverseString("H*25aa-b?")).toBe("?b-aa52*H")
})

test("Adds numbers", () => {
    expect(calculator.add(1,2)).toBe(3)
})

test("Subtracts numbers", () => {
    expect(calculator.subtract(10,2)).toBe(8)
})

test("Divides numbers", () => {
    expect(calculator.divide(20,2)).toBe(10)
})

test("Multiplies numbers", () => {
    expect(calculator.multiply(5,3)).toBe(15)
})

test("Cipher on simple string", () => {
    expect(caesarCipher("abcde", 1)).toBe("bcdef")
})

test("Wrapping z to a", () => {
    expect(caesarCipher("zebra", 2)).toBe("bgdtc")
})

test("Uppercase cipher", () => {
    expect(caesarCipher("ABCDE", 1)).toBe("BCDEF")
})

test("Punctuation", () => {
    expect(caesarCipher("abc.de*fg+h", 1)).toBe("bcd.ef*gh+i")
})

test("Small Numbers", () => {
    expect(analyzeArray([1,2,4,8,10])).toStrictEqual({average: 5, min: 1, max: 10, length: 5})
})

test("Big Numbers", () => {
    expect(analyzeArray([100,250,420,520,180])).toStrictEqual({average: 294, min: 100, max: 520, length: 5})
})