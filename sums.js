export const multiply = (a, b) => {
    return a*b;
};

export const divide = (a, b) => {
    if (a == 0 || b == 0){
        return "Can't divide by 0";
    } else {
        return a/b;
    }
}

export const subtract = (a, b) => {
    return a-b;
}

export const makeAString = (wordArray) => {
    return wordArray.join(" ");
}

export const makeShoppingList = (list, item) => {
    return list.unshift(item);
}