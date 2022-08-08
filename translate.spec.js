import {expect, it} from "@jest/globals";
import {translate} from "./translate";



//Valid inputs (positive tests)
it("Should translate hello to bonjour in French", () => {
    const result = translate("hello", "french");
    expect(result).toBe("bonjour");
})

it("Should translate hello to hallo in German", () => {
    const result = translate("hello", "german");
    expect(result).toBe("hallo");
})

it("Should return a string", () => {
    const result = translate("hello", "french");
    expect(typeof result).toBe("string");
})

it("Should translate different words accurately", () => {
    const result = translate("good morning", "german");
    expect(result).toBe("guten morgen");
})


//Invalid inputs (negative tests)
it("Should translate unknown words to 'unavailable'", () => {
    const result = translate("goodbye", "german");
    expect(result).toBe("unavailable");
})

it("Should translate asdfghjkl to 'unavailable'", () => {
    const result = translate("asdfghjkl", "french");
    expect(result).toBe("unavailable");
})

it("Should translate 123 to 'unavailable'", () => {
    const result = translate(123, "french");
    expect(result).toBe("unavailable");
})


//Undefined inputs (negative tests)
it("Should translate undefined inputs to 'unavailable'", () => {
    const result = translate();
    expect(result).toBe("unavailable");
})

it("Should request language when undefined", () => {
    const result = translate("hello");
    expect(result).toBe("Please input desired language");
})