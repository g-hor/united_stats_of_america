// import Example from "./scripts/example.js"; // syntax to import our class file
// import { renderMap } from "./scripts/map.js";
// import { calculate } from "./scripts/calculation.js";
import { fetchAndRender } from "./scripts/map.js";

const ANY_ILLNESS = ["#6B705C", "#A5A58D", "#B7B7A4", "#FFE8D6", "#DDBEA9", "#CB997E"];
const DEPRESSION = ["#ccccff", "#99ccff", "#6699ff", "#3366ff", "#3333ff", "#000066"];
const SRS_ILLNESS = ["#F7D1CD", "#E8C2CA", "#D1B3C4", "#B392AC", "#735D78", "#4C404F"]

document.addEventListener("DOMContentLoaded", () => {

  fetchAndRender("NSDUH_percentages/table27.csv", ANY_ILLNESS);
  // document.getElementById("btn").addEventListener("click", () => {
  //   document.querySelector(".us-map").innerHTML = "";
  //   fetchAndRender("NSDUH_percentages/table30.csv", DEPRESSION);
  // });

  document.getElementById("table27").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Any Mental Illness in the Past Year";
    fetchAndRender("NSDUH_percentages/table27.csv", ANY_ILLNESS);
  })

  document.getElementById("table28").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Serious Mental Illness in the Past Year";

    fetchAndRender("NSDUH_percentages/table28.csv", SRS_ILLNESS);
  })

  document.getElementById("table29").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Received Mental Health Services in the Past Year";

    fetchAndRender("NSDUH_percentages/table29.csv", ANY_ILLNESS);
  })

  document.getElementById("table26").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Needing But Not Receiving Treatment at a Specialty Facility for Substance Use in the Past Year";

    fetchAndRender("NSDUH_percentages/table26.csv", ANY_ILLNESS);
  })

  document.getElementById("table30").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Major Depressive Episode in the Past Year";

    fetchAndRender("NSDUH_percentages/table30.csv", DEPRESSION);
  })

  document.getElementById("table31").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Had Serious Thoughts of Suicide in the Past Year";

    fetchAndRender("NSDUH_percentages/table31.csv", ANY_ILLNESS);
  })

  document.getElementById("table32").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Made Any Suicide Plans in the Past Year";

    fetchAndRender("NSDUH_percentages/table32.csv", ANY_ILLNESS);
  })

  document.getElementById("table33").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Attempted Suicide in the Past Year";

    fetchAndRender("NSDUH_percentages/table33.csv", ANY_ILLNESS);
  })

  document.getElementById("table2").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Marijuana Use in the Past Year";

    fetchAndRender("NSDUH_percentages/table2.csv", ANY_ILLNESS);
  })

  document.getElementById("table7").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Cocaine Use in the Past Year";

    fetchAndRender("NSDUH_percentages/table7.csv", ANY_ILLNESS);
  })

  document.getElementById("table11").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Methamphetamine Use in the Past Year";

    fetchAndRender("NSDUH_percentages/table11.csv", ANY_ILLNESS);
  })

  document.getElementById("table12").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Pain Reliever Misuse in the Past Year";

    fetchAndRender("NSDUH_percentages/table12.csv", ANY_ILLNESS);
  })

  document.getElementById("table22").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Alcohol Use Disorder in the Past Year";

    fetchAndRender("NSDUH_percentages/table22.csv", ANY_ILLNESS);
  })

  document.getElementById("table23").addEventListener("click", () => {
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector("h2").innerHTML = "Substance Use Disorder in the Past Year";

    fetchAndRender("NSDUH_percentages/table23.csv", ANY_ILLNESS);
  })

})