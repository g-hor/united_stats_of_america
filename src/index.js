// import Example from "./scripts/example.js"; // syntax to import our class file
// import { renderMap } from "./scripts/map.js";
// import { calculate } from "./scripts/calculation.js";
import { fetchAndRender } from "./scripts/map.js";

const ANY_ILLNESS = ["#6B705C", "#A5A58D", "#B7B7A4", "#FFE8D6", "#DDBEA9", "#CB997E"];
const DEPRESSION = ["#ccccff", "#99ccff", "#6699ff", "#3366ff", "#3333ff", "#000066"];
const SRS_ILLNESS = ["#F7D1CD", "#E8C2CA", "#D1B3C4", "#B392AC", "#735D78", "#4C404F"];
const SUBSTANCE_USE = ["#EDE0D4", "#E6CCB2", "#DDB892", "#B08968", "#9C6644", "#7F5539"];
const WEED_USE = ["#ECF39E", "#BDD39C", "#90A955", "#4F772D", "#31572C", "#132A13"];
const PAIN_RELIEF = ["#FFCDB2", "#FFB4A2", "#E5989B", "#C17179", "#A36672", "#6D6875"];
const ALCOHOL = ["#E9E5D8", "#D4E0CD", "#A3C9A8", "#84B59F", "#69A297", "#50808E"];
const RECEIVED_SERV = ["#D58272", "#A7A18B", "#B0B3A8", "#8FA78B", "#61BD87", "#429E69"];
const THOUGHTS = ["#8DA253", "#C3CFA0", "#FEDB72", "#F7E1D3", "#EDBF9E", "#DA9461"];
const PLANS = ["#EFD9CE", "#DEC0F1", "#B79CED", "#957FEF", "#7161EF", "#3921E8"];
const COCAINE = ["#745CFF", "#8585FF", "#BAADFF", "#FFEEDD", "#FFA970", "#FF781F"];

document.addEventListener("DOMContentLoaded", () => {

  const userModal = document.getElementById('user-modal');
  const closeButton = document.querySelector('.close');
  const closeState = document.querySelectorAll('.close')[1];
  const stateDetails = document.getElementById('state-details');
  const countContainer = document.getElementById('count-details');
  const centContainer = document.getElementById('percent-details');
  
  // closes instructions modal upon clicking close
  closeButton.addEventListener('click', function() {
    userModal.classList.add('hidden')
  });

  // closes state details modal upon clicking close
  closeState.addEventListener('click', function() {
    stateDetails.classList.add('hidden')
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
  });

  // closes instructions modal upon clicking anywhere
  window.addEventListener('click', function(event) {
    if (event.target == userModal) {
      userModal.classList.add('hidden');
    }
  })


  fetchAndRender("NSDUH_count/table27.csv", "NSDUH_percentages/table27.csv", ANY_ILLNESS);

  document.getElementById("table27").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Any Mental Illness in the Past Year";
    fetchAndRender("NSDUH_count/table27.csv", "NSDUH_percentages/table27.csv", ANY_ILLNESS);
  })

  document.getElementById("table28").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Serious Mental Illness in the Past Year";

    fetchAndRender("NSDUH_count/table28.csv", "NSDUH_percentages/table28.csv", SRS_ILLNESS);
  })

  document.getElementById("table29").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Received Mental Health Services in the Past Year";

    fetchAndRender("NSDUH_count/table29.csv", "NSDUH_percentages/table29.csv", RECEIVED_SERV);
  })

  document.getElementById("table30").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Major Depressive Episode in the Past Year";

    fetchAndRender("NSDUH_count/table30.csv", "NSDUH_percentages/table30.csv", DEPRESSION);
  })

  document.getElementById("table31").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Had Serious Thoughts of Suicide in the Past Year";

    fetchAndRender("NSDUH_count/table31.csv", "NSDUH_percentages/table31.csv", THOUGHTS);
  })

  document.getElementById("table32").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Made Any Suicide Plans in the Past Year";

    fetchAndRender("NSDUH_count/table32.csv", "NSDUH_percentages/table32.csv", PLANS);
  })

  document.getElementById("table33").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Attempted Suicide in the Past Year";

    fetchAndRender("NSDUH_count/table33.csv", "NSDUH_percentages/table33.csv", DEPRESSION);
  })

  document.getElementById("table7").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Cocaine Use in the Past Year";

    fetchAndRender("NSDUH_count/table7.csv", "NSDUH_percentages/table7.csv", COCAINE);
  })

  document.getElementById("table11").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Methamphetamine Use in the Past Year";

    fetchAndRender("NSDUH_count/table11.csv", "NSDUH_percentages/table11.csv", ANY_ILLNESS);
  })

  document.getElementById("table12").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Pain Reliever Misuse in the Past Year";

    fetchAndRender("NSDUH_count/table12.csv", "NSDUH_percentages/table12.csv", PAIN_RELIEF);
  })

  document.getElementById("table22").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Alcohol Use Disorder in the Past Year";

    fetchAndRender("NSDUH_count/table22.csv", "NSDUH_percentages/table22.csv", ALCOHOL);
  })
  
  document.getElementById("table2").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Marijuana Use in the Past Year";

    fetchAndRender("NSDUH_count/table2.csv", "NSDUH_percentages/table2.csv", WEED_USE);
  })

  document.getElementById("table23").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Substance Use Disorder in the Past Year";

    fetchAndRender("NSDUH_count/table23.csv", "NSDUH_percentages/table23.csv", SUBSTANCE_USE);
  })

  document.getElementById("table26").addEventListener("click", () => {
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Needing But Not Receiving Treatment at a Specialty Facility for Substance Use in the Past Year";

    fetchAndRender("NSDUH_count/table26.csv", "NSDUH_percentages/table26.csv", ANY_ILLNESS);
  })

})