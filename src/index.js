// import Example from "./scripts/example.js"; // syntax to import our class file
// import { renderMap } from "./scripts/map.js";
// import { calculate } from "./scripts/calculation.js";
import { fetchAndRender } from "./scripts/map.js";

const ANY_ILLNESS = ["#4B4F40", "#89896C", "#B7B7A4", "#FFE8D6", "#C5906D", "#AF6B46"];
const DEPRESSION = ["#432853", "#7A002F", "#FFAFCC", "#BDE0FE", "#005FB8", "#002A52"];
const SRS_ILLNESS = ["#832124", "#8C545F", "#FFBEAD", "#B392AC", "#735D78", "#4C404F"];
const SUBSTANCE_USE = ["#261042", "#682D8B", "#B298DC", "#B8D0EB", "#0CACA6", "#075F5D"];
const WEED_USE = ["#0B460B", "#3D6D37", "#C0DDA6", "#F1F6B6", "#6E8745", "#4C5D32"];
const PAIN_RELIEF = ["#112D2D", "#4E554E", "#E7D8C9", "#E6BEAE", "#8D6E53", "#403326"];
const ALCOHOL = ["#20163B", "#4C4474", "#B5A1CE", "#DFCBE2", "#923A6A", "#3A172B"];
const RECEIVED_SERV = ["#5E3C1D", "#AC7035", "#FAEDCD", "#FCEF9C", "#717A29", "#48512A"];
const THOUGHTS = ["#202231", "#4C586B", "#D9E4E8", "#F46778", "#8C031A", "#490914"];
const PLANS = ["#2F3733", "#455E4F", "#FFD5C2", "#FFADBC", "#901326", "#5C474D"];
const ATTEMPTED = ['#191D24', '#352A3C', '#EFD3D7', '#ADB8FF', '#000A52', '#000529'];
const COCAINE = ["#535E1D", "#EEEBAA", "#DFEBD6", "#F19C79", "#843D33", "#542C27"];
const METH = ['#2F2B22', '#6A604D', '#C5C3BE', '#F4AC90', '#CD4813', '#5D1F09'];
const NOT_RECEIVING = ['#3D4051', '#536379', '#9DBEB9', '#B2C9AB', '#859051', '#8C772B']


document.addEventListener("DOMContentLoaded", () => {

  const userModal = document.getElementById('user-modal');
  const closeUser = document.querySelector('.close');
  const closeData = document.querySelectorAll('.close')[1];
  const closeState = document.querySelectorAll('.close')[2];
  const stateDetails = document.getElementById('state-details');
  const countContainer = document.getElementById('count-details');
  const centContainer = document.getElementById('percent-details');
  const questionIcon = document.querySelector('.fa-circle-question');
  const infoIcon = document.querySelector('.fa-circle-info');
  const dataModal = document.getElementById('data-modal');

  
  // closes instructions modal upon clicking close
  closeUser.addEventListener('click', function() {
    userModal.classList.add('hidden');
  });

  closeData.addEventListener('click', function() {
    dataModal.classList.add('hidden');
  });

  // closes state details modal upon clicking close
  closeState.addEventListener('click', function() {
    stateDetails.classList.add('hidden')
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
  });

  questionIcon.addEventListener('click', function() {
    userModal.classList.remove('hidden');
  });

  infoIcon.addEventListener('click', function() {
    dataModal.classList.remove('hidden');
  });

  // closes instructions modal upon clicking anywhere
  window.addEventListener('click', function(event) {
    if (event.target == userModal) {
      userModal.classList.add('hidden');
    }
    if (event.target == dataModal) {
      dataModal.classList.add('hidden');
    }
  });


  // selection options logic
  const selections = document.querySelectorAll('.selector');
  const table27 = document.getElementById('table27');
  const table28 = document.getElementById('table28');
  const table29 = document.getElementById('table29');
  const table30 = document.getElementById('table30');
  const table31 = document.getElementById('table31');
  const table32 = document.getElementById('table32');
  const table33 = document.getElementById('table33');
  const table7 = document.getElementById('table7');
  const table11 = document.getElementById('table11');
  const table12 = document.getElementById('table12');
  const table22 = document.getElementById('table22');
  const table2 = document.getElementById('table2');
  const table23 = document.getElementById('table23');
  const table26 = document.getElementById('table26');


  fetchAndRender("NSDUH_count/table27.csv", "NSDUH_percentages/table27.csv", ANY_ILLNESS);
  table27.classList.add('active');

  table27.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table27.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Any Mental Illness in the Past Year";
    fetchAndRender("NSDUH_count/table27.csv", "NSDUH_percentages/table27.csv", ANY_ILLNESS);
  })

  table28.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table28.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Serious Mental Illness in the Past Year";

    fetchAndRender("NSDUH_count/table28.csv", "NSDUH_percentages/table28.csv", SRS_ILLNESS);
  })

  table29.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table29.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Received Mental Health Services in the Past Year";

    fetchAndRender("NSDUH_count/table29.csv", "NSDUH_percentages/table29.csv", RECEIVED_SERV);
  })

  table30.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table30.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Major Depressive Episode in the Past Year";

    fetchAndRender("NSDUH_count/table30.csv", "NSDUH_percentages/table30.csv", DEPRESSION);
  })

  table31.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table31.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Had Serious Thoughts of Suicide in the Past Year";

    fetchAndRender("NSDUH_count/table31.csv", "NSDUH_percentages/table31.csv", THOUGHTS);
  })

  table32.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table32.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Made Any Suicide Plans in the Past Year";

    fetchAndRender("NSDUH_count/table32.csv", "NSDUH_percentages/table32.csv", PLANS);
  })

  table33.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table33.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Attempted Suicide in the Past Year";

    fetchAndRender("NSDUH_count/table33.csv", "NSDUH_percentages/table33.csv", ATTEMPTED);
  })

  table7.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table7.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Cocaine Use in the Past Year";

    fetchAndRender("NSDUH_count/table7.csv", "NSDUH_percentages/table7.csv", COCAINE);
  })

  table11.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table11.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Methamphetamine Use in the Past Year";

    fetchAndRender("NSDUH_count/table11.csv", "NSDUH_percentages/table11.csv", METH);
  })

  table12.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table12.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Pain Reliever Misuse in the Past Year";

    fetchAndRender("NSDUH_count/table12.csv", "NSDUH_percentages/table12.csv", PAIN_RELIEF);
  })

  table22.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table22.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Alcohol Use Disorder in the Past Year";

    fetchAndRender("NSDUH_count/table22.csv", "NSDUH_percentages/table22.csv", ALCOHOL);
  })
  
  table2.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table2.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Marijuana Use in the Past Year";

    fetchAndRender("NSDUH_count/table2.csv", "NSDUH_percentages/table2.csv", WEED_USE);
  })

  table23.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table23.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Substance Use Disorder in the Past Year";

    fetchAndRender("NSDUH_count/table23.csv", "NSDUH_percentages/table23.csv", SUBSTANCE_USE);
  })

  table26.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove('active'));
    table26.classList.add('active');
    countContainer.innerHTML = '';
    centContainer.innerHTML = '';
    stateDetails.classList.add('hidden');
    document.querySelector(".us-map").innerHTML = "";
    document.querySelector(".legend").innerHTML = "";
    document.querySelector("h2").innerHTML = "Needing But Not Receiving Treatment at a Specialty Facility for Substance Use in the Past Year";

    fetchAndRender("NSDUH_count/table26.csv", "NSDUH_percentages/table26.csv", NOT_RECEIVING);
  })

})