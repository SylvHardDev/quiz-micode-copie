import "./style.css";
import { Questions } from "./questions";

const app = document.querySelector("#app");

const startButton = document.querySelector("#start");

startButton.addEventListener("click", startQuiz);
