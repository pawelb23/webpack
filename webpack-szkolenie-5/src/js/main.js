import { sum } from "./sum";
import "../scss/style.scss";
import Icon from "../assets/img/basketball-png.png";
// import backgroundImage from "../assets/img/photo-dandelion-field.jpg";

console.log("Hello Word!!! Hello Webpack Tutorial 5 !!!");
console.log(sum(3, 5, 7));

let heading = document.querySelector("#demo"),
  sumValue = sum(3, 10, 12);
heading.innerHTML = `3 + 10 + 12 = ${sumValue}`;

document.querySelector(
  "#demo-two .basic-info"
).innerHTML = `Ćwiczenia z wykorzystaniem Webpack-Babel (a także SASS i Obrazki) ---
odczyt na: `;
let localHostAddress = document.querySelector("#demo-two .local-host");

localHostAddress.innerHTML = `"localhost:9900" z Browser-sync (3.10) również  "localhost:9100"`;

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector(".picture").appendChild(myIcon);

// Poniższą tapetę wstawiliśmy za pomocą szablonu html, webpack Img i odpowiednich ustawień
// let myBackground = new Image();
// myBackground.src = backgroundImage;
// document.querySelector(".background-image").appendChild(myBackground);
