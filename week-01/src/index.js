"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addButton = document.getElementById("add");
const subButton = document.getElementById("substract");
const mulButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
// function checkType(a: unknown, b: unknown) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     alert("잘못된 입력입니다. 숫자를 입력해주십시오.");
//   }
// }
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("0이 아닌 다른 숫자를 입력해주세요.");
    }
    return a / b;
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
    // checkType(num1, num2);
    result.textContent = add(Number(num1.value), Number(num2.value)).toString();
});
subButton === null || subButton === void 0 ? void 0 : subButton.addEventListener("click", () => {
    // checkType(num1, num2);
    result.textContent = substract(Number(num1.value), Number(num2.value)).toString();
});
mulButton === null || mulButton === void 0 ? void 0 : mulButton.addEventListener("click", () => {
    // checkType(num1, num2);
    result.textContent = multiply(Number(num1.value), Number(num2.value)).toString();
});
divButton === null || divButton === void 0 ? void 0 : divButton.addEventListener("click", () => {
    // checkType(num1, num2);
    try {
        result.textContent = divide(Number(num1.value), Number(num2.value)).toString();
    }
    catch (e) {
        // result.textContent = e.message;
    }
});
