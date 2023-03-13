// import Example from "./scripts/example.js"; // syntax to import our class file
import { renderMap } from "./scripts/map.js";
import { calculate } from "./scripts/calculation.js";

const DEPRESSION_COLORS = ["#99ccff", "#6699ff", "#3366ff", "#000066"];

document.addEventListener("DOMContentLoaded", () => {

  // renderMap("NSDUH_count/NSDUHsaeTotalsTab30-2019.csv", DEPRESSION_COLORS);
  // console.log(calculate("NSDUH_count/NSDUHsaeTotalsTab30-2019.csv", DEPRESSION_COLORS));

  let mapData;
  let statData;
  let svg = d3
    .select('.us-map')
    .attr('viewBox', [0, 0, 950, 520])
    // .on("click", reset);
  
  d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
    .then(data => {
      mapData = topojson.feature(data, data.objects.states).features;
      console.log(mapData);
  
      d3.csv("NSDUH_percentages/NSDUHsaeExcelTab30-2019.csv")
        .then(data => {
          statData = data;
          console.log(statData);
  
          renderMap();
        })
    })
  
  function renderMap() {
    svg.selectAll('path')
      .data(mapData)
      .enter()
      .append('path')
      .attr('d', d3.geoPath(d3.geoAlbersUsa()))
      .attr('fill', (state) => {
        let stateName = state.properties.name;
        let stateData = statData.find((ele) => {
          return ele["State"] === stateName
        })
        stateData ||= {"12-17 Estimate": 0, "18 or Older Estimate": 0, "18-25 Estimate": 0, "26 or Older Estimate": 0}

        let avg = (
          (parseFloat(stateData["12-17 Estimate"]) + 
          parseFloat(stateData["18 or Older Estimate"]) + 
          parseFloat(stateData["18-25 Estimate"]) + 
          parseFloat(stateData["26 or Older Estimate"])
          ) / 4
        );

        if (avg <= 9.75) {
          return DEPRESSION_COLORS[0]
        } else if (avg >= 9.75 && avg <= 11) {
          return DEPRESSION_COLORS[1]
        } else if (avg >= 11 && avg <= 12.25) {
          return DEPRESSION_COLORS[2] 
        } else {
          return DEPRESSION_COLORS[3]
        }
      })
  }
})