import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;
console.log(input);
if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
