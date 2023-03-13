import { first } from "lodash";

export function renderMap(url, colors) {
  fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .then(data => {
      // console.log(data);
      // shortcut for calling later
      let statesArray = data.objects.states.geometries;

      // set up empty hashmap with average data
      statesArray[56] = {};

      // iterate over CSV file to SET state average data in a hashmap at the last index of 'data' array
      d3.csv(url, function(stats) {
        let avg = (
            (parseInt(stats["12-17 Estimate"]) + 
            parseInt(stats["18 or Older Estimate"]) + 
            parseInt(stats["18-25 Estimate"]) + 
            parseInt(stats["26 or Older Estimate"])
            ) / 4
          );
          // console.log(stats);
          // if (avg < min) min = avg;
          // if (avg > max) max = avg;
          statesArray[56][stats["State"]] = [avg];
        })

      // let range = max - min;
      // let firstQuartile = min + (range / 4);
      // let secondQuartile = min + (range / 2);
      // let thirdQuartile = min + (range * 3 / 4);
      // console.log(min);
      // console.log(max);
      // console.log(range);
      // console.log(firstQuartile);
      // console.log(secondQuartile);
      // console.log(thirdQuartile);

      const width = 955;
      const height = 520;

      // alters size of the map
      const svg = d3
        .select('.us-map')
        .attr('viewBox', [0, 0, width, height])
        .on("click", reset);
  
      // translates latitude and longitude of a globe to points on a flat map
      const projection = d3.geoAlbersUsa()

      // takes projection and converts the series of map coordinates to draw a shape
      const path = d3.geoPath(projection);
      const g = svg.append('g');

      // callback for click event
      function zoomed(event) {
        const {transform} = event;
        g.attr("transform", transform);
        g.attr("stroke-width", 1 / transform.k);
      }
      
      // callback for click event
      function reset() {
        states.transition().style("fill", null);
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
        );
      }
      
      // callback for click event
      function clicked(event, d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();
        states.transition().style("fill", null);
        // d3.select(this).transition().style("fill", "yellow");
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node())
        );
      }

      // specifies extent of the zoom
      const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

      // creates states' shapes/outlines
      const states = g.append("g")
      .attr("fill", "#444")
      .attr("cursor", "pointer")
      .selectAll("path")
      // topojson.feature converts topojson data into geojson
      // data.objects.states.features holds an array of coordinates
      .data(topojson.feature(data, data.objects.states).features)
      .join("path")
        .on("click", clicked)
        .attr("d", path);
      
      // adds title of state's name (displays upon hovering over state)
      states.append("title")
      .text(d => d.properties.name);
      
      g.append("path")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path(topojson.mesh(data, data.objects.states, (a, b) => a !== b)));
      
      svg.call(zoom);

      let min;
      let max;
      
      function calculateStats(averagesHash) {
        let values = Object.values(averagesHash);
        values.forEach((val) => {
          if (val[0] < min) min = val[0];
          if (val[0] > max) max = val[0];
        })
      }

      let range = max - min;
      let firstQuartile = min + (range / 4);
      let secondQuartile = min + (range / 2);
      let thirdQuartile = min + (range * 3 / 4);

      function findFillColor(averagesHash) {
        // debugger
        let values = Object.entries(averagesHash);
        values.forEach((val) => {
          if (val[0] >= min && val[0] <= firstQuartile) averagesHash[val[1]].concat(colors[0]);
          if (val[0] >= firstQuartile && val[0] <= secondQuartile) averagesHash[val[1]].concat(colors[1]);
          if (val[0] >= secondQuartile && val[0] <= thirdQuartile) averagesHash[val[1]].concat(colors[2]);
          if (val[0] >= thirdQuartile && val[0] <= max) averagesHash[val[1]].concat(colors[3]);
        });
      }

      // function fillStates(g, averagesHash) {
      //   states.attr("fill", averagesHash => {
      //     findFillColor(averagesHash);
      //   })
      // }
      
      setTimeout(calculateStats(statesArray[56]), 100);
      setTimeout(findFillColor(statesArray[56]), 101);
      // setTimeout(fillStates(states, statesArray[56]), 102);
      return svg.node();
    });
}