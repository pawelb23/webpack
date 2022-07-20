import { sum } from "./sum";
import "../css/style.css";
console.log("Hello World");
console.log(sum(2, 3, 5));

let heading = document.querySelector("#demo"),
  sumValue = sum(5, 10, 15);
heading.innerHTML = `5 + 10 + 15 = ${sumValue}`;

document.querySelector(
  "#demo-two .basic-info"
).innerHTML = `Ćwiczenia z wykorzystaniem Webpack ---
odczyt na `;
let localHostAddress = document.querySelector("#demo-two .local-host");

localHostAddress.innerHTML = `"localhost:9000"`;
