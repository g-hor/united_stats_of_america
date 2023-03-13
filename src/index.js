// import Example from "./scripts/example.js"; // syntax to import our class file
import { renderMap } from "./scripts/map.js";
import { calculate } from "./scripts/calculation.js";

const DEPRESSION_COLORS = ["#1e90ff", "#1c86ee", "#1874cd", "#104e8b"];

document.addEventListener("DOMContentLoaded", () => {

  renderMap("NSDUH_count/NSDUHsaeTotalsTab30-2019.csv", DEPRESSION_COLORS);
  // console.log(calculate("NSDUH_count/NSDUHsaeTotalsTab30-2019.csv", DEPRESSION_COLORS));
})