"use strict";
function myFunction(age, name = "unknown") {
    if (age > 18 || name === "unknown") {
        return true;
    }
    return false;
}
let result = myFunction(15, "Hridoy");
console.log(result);
//# sourceMappingURL=index.js.map