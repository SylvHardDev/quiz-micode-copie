import "./style.css";

const app = document.querySelector("#app");

const colors = ["red", "green", "blue"];

let i = 0;

setInterval(() => {
  app.computedStyleMap.backgroundColor = colors[i];
});
