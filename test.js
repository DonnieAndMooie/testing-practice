import {capitalize} from './code.js'

test("Lowercase string gets capitalized", () => {{
    expect(capitalize("hello")).toBe("Hello")
}})

test("Uppercase string", () => {
    expect(capitalize("HELLO")).toBe("HELLO")
})