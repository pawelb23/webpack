import { sum } from "./sum";
import "../scss/style.scss";
import Icon from "../assets/img/basketball-png.png";

console.log("Hello Word!!! Hello Babel!!!");
console.log(sum(3, 5, 7));

let heading = document.querySelector("#demo"),
  sumValue = sum(3, 10, 12);
heading.innerHTML = `3 + 10 + 12 = ${sumValue}`;

document.querySelector(
  "#demo-two .basic-info"
).innerHTML = `Ćwiczenia z wykorzystaniem Webpack-Babel (a także SASS i Obrazki) ---
odczyt na `;
let localHostAddress = document.querySelector("#demo-two .local-host");

localHostAddress.innerHTML = `"localhost:9500"`;

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector(".picture").appendChild(myIcon);
