import {capitalize, reverseString, calculator} from './code.js'

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