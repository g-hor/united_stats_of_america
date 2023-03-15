// import Example from "./scripts/example.js"; // syntax to import our class file
// import { renderMap } from "./scripts/map.js";
// import { calculate } from "./scripts/calculation.js";
import { fetchAndRender } from "./scripts/map.js";

const ANY_ILLNESS = ["#66ffff", "#99ff99", "#ffff99", "#ff9999", "#ff99ff", "#99ccff"]
const DEPRESSION = ["#ccccff", "#99ccff", "#6699ff", "#3366ff", "#3333ff", "#000066"];

document.addEventListener("DOMContentLoaded", () => {

  fetchAndRender("NSDUH_count/table27.csv", ANY_ILLNESS);
  document.getElementById("btn").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    fetchAndRender("NSDUH_percentages/table30.csv", DEPRESSION);
  });
})