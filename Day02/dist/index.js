"use strict";
var _a;
const employee = {
    id: 1,
    name: "Hridoy",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let a = kgToLbs(10);
let b = kgToLbs("10kg");
console.log(a, b);
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greeting(name) {
    if (name)
        console.log(name.toUpperCase);
    else {
    }
}
greeting(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer();
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map