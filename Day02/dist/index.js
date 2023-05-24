"use strict";
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
//# sourceMappingURL=index.js.map