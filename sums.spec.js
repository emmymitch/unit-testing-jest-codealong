//expect, it
import {expect, it} from "@jest/globals";
import {multiply, divide, subtract, makeAString, makeShoppingList} from "./sums";


//Multiply tests
//writing a test case
it("Multiplies 3 and 4 to equal 12", () => {
    //write our test case in here
    const result = multiply(3, 4);
    
    //check result = what expected
    expect(result).toBe(12);
})

it("Multiplies one postive and one negative number to give a negative", () => {
    const result = multiply(-3, 6);
    expect(result).toBeLessThan(0);
})


//Divide tests
it("Divides 15 by 3 to equal 5", () => {
    const result = divide(15, 3);
    expect(result).toBe(5);
})

it("Divides by 0 to give 'Can't divide by 0'", () => {
    const result = divide(10, 0);
    expect(result).toBe("Can't divide by 0");
})


//Subtract tests
it("Takes 4 from 9 to give 5", () => {
    const result = subtract(9, 4);
    expect(result).toBe(5);
})

it("Subtracts decimal numbers accurately", () => {
    const result = subtract(4.6, 2.7);
    //expect(result).toBe(1.9);
    expect(result).toBeCloseTo(1.9);
})


//String tests
it("Returns a string from the input array", () => {
    const string = makeAString(["this", "is", "a", "sentence"]);
    expect(string).toMatch("this is a sentence");
})


//Shopping List
const list = [];
const items = ["Bread", "Milk", "Eggs"];

it("Adds all items onto the shopping list", () => {
    items.forEach((item) => {
        makeShoppingList(list, item);
    })

    expect(list).toContain("Bread");
    expect(list).toContain("Milk");
    expect(list).toContain("Eggs");
})