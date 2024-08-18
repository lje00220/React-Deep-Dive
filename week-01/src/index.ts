const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

const addButton = document.getElementById("add");
const subButton = document.getElementById("substract");
const mulButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");

function add(a: number, b: number): number {
  return a + b;
}

function substract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

addButton?.addEventListener("click", () => {
  result.textContent = add(Number(num1.value), Number(num2.value)).toString();
});
subButton?.addEventListener("click", () => {
  result.textContent = substract(
    Number(num1.value),
    Number(num2.value)
  ).toString();
});
mulButton?.addEventListener("click", () => {
  result.textContent = multiply(
    Number(num1.value),
    Number(num2.value)
  ).toString();
});
divButton?.addEventListener("click", () => {
  result.textContent = divide(
    Number(num1.value),
    Number(num2.value)
  ).toString();
});
