"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addButton = document.getElementById("add");
const subButton = document.getElementById("substract");
const mulButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
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
    return a / b;
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
    result.textContent = add(Number(num1.value), Number(num2.value)).toString();
});
subButton === null || subButton === void 0 ? void 0 : subButton.addEventListener("click", () => {
    result.textContent = substract(Number(num1.value), Number(num2.value)).toString();
});
mulButton === null || mulButton === void 0 ? void 0 : mulButton.addEventListener("click", () => {
    result.textContent = multiply(Number(num1.value), Number(num2.value)).toString();
});
divButton === null || divButton === void 0 ? void 0 : divButton.addEventListener("click", () => {
    result.textContent = divide(Number(num1.value), Number(num2.value)).toString();
});
