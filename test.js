import {capitalize, reverseString} from './code.js'

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

