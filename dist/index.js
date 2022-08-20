"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return Number(weight) * 2.2;
}
console.log(kgToLbs('11').toFixed(2), kgToLbs(11));
//# sourceMappingURL=index.js.map