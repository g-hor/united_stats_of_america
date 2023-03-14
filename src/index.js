// import Example from "./scripts/example.js"; // syntax to import our class file
// import { renderMap } from "./scripts/map.js";
// import { calculate } from "./scripts/calculation.js";
import { fetchAndRender } from "./scripts/map.js";

const DEPRESSION_COLORS = ["#99ccff", "#6699ff", "#3366ff", "#000066"];

document.addEventListener("DOMContentLoaded", () => {

  fetchAndRender("NSDUH_percentages/NSDUHsaeExcelTab30-2019.csv", DEPRESSION_COLORS);
  document.getElementById("btn").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    fetchAndRender("NSDUH_percentages/NSDUHsaeExcelTab01-2019.csv", ["#f00", "#0f0", "#00f", "#000"]);
  });
})