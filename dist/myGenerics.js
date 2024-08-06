"use strict";
const rank = [];
const whatever = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({ color: "red", size: "large", price: 19.9 });
function getSearchProducts(products) {
    //   return 1;
    //after some complex calculations
    const myIndex = 1;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 1;
    return products[myIndex];
};
function anotherFunction(val1, Val2) {
    return { val1, Val2 };
}
anotherFunction(true, {
    connection: "localhost",
    username: "admin",
    passoword: "secret",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addItem(item) {
        this.cart.push(item);
    }
}
