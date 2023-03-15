import { calculateSD, parse } from "./data_parsers";

export function fetchAndRender(url, colors) {
  const deviationText = [
    "Two or More Standard Deviations (SD) Below National Average (NA)",
    "Between Two and One SD Below NA",
    "Between One SD Below NA and NA",
    "Between One SD Above NA and NA",
    "Between One and Two SD Above NA",
    "Two more More SD Above NA"
  ]

  let mapData;
  let csvData;

  
  d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
    .then(data => {
      mapData = data;
      // console.log(mapData);
  
      d3.csv(url)
        .then(data => {
          csvData = data;
          // console.log(csvData);
          
          renderMap();
        })
    })
  
  function renderMap() {
    const width = 950;
    const height = 520;
    const path = d3.geoPath(d3.geoAlbersUsa());
    const svg = d3
      .select('.us-map')
      .attr('viewBox', [0, 0, width, height])
      .on("click", reset);
    const g = svg.append('g');

    // defines how much to zoom in (initialized here to allow access in later callbacks)
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);


    /* uses 'mapData' to create geometric shapes for states
      applies fill color based on selected data
      applies 'clicked' callback function to zoom in on selected state
    */
    const states = g.append('g')
      .attr('cursor', 'pointer')
      .selectAll('path')
      .data(topojson.feature(mapData, mapData.objects.states).features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', (state) => {
        let stateName = state.properties.name;
        let stateData = csvData.find((ele) => {
          return ele["State"] === stateName
        })
        stateData ||= {"18 or Older Estimate": "0"}

        const stateAvg = parse(stateData["18 or Older Estimate"]);
        const standardDev = (calculateSD(d3.map(csvData.slice(6), d => parse(d['18 or Older Estimate']))));
        const nationalAvg = d3.mean(csvData.slice(6), ele => parse(ele["18 or Older Estimate"]))

        const minusTwoSD = nationalAvg - (2 * standardDev);
        const minusOneSD = nationalAvg - (1 * standardDev);
        const plusOneSD = nationalAvg + (1 * standardDev);
        const plusTwoSD = nationalAvg + (2 * standardDev);

        if (stateAvg <= minusTwoSD) {
          return colors[0];
        } else if (stateAvg > minusTwoSD && stateAvg <= minusOneSD) {
          return colors[1];
        } else if (stateAvg > minusOneSD && stateAvg <= nationalAvg) {
          return colors[2];
        } else if (stateAvg > nationalAvg && stateAvg <= plusOneSD) {
          return colors[3];
        } else if (stateAvg > plusOneSD && stateAvg <= plusTwoSD) {
          return colors[4];
        } else {
          return colors[5];
        }
      })
      .join('path')
      .on('click', clicked)
      .attr('d', path);


    // add HTML title element to each state (displays upon hovering)
    states.append('title').text(state => state.properties.name);


    // adds white state borders
    g.append('path')
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-linejoin', 'round')
      .attr('d', path(topojson.mesh(mapData, mapData.objects.states, (a, b) => a !== b)))


    // create color legend
    const legend = d3.select('.legend')
    let yAxis = 0

    colors.forEach(function(color, idx) {
      let portion = legend.append('g').attr('class', 'portion')
      portion.append('rect')
        .attr('x', '10')
        .attr('y', `${yAxis}`)
        .attr('width', '40')
        .attr('height', '15')
        .attr('fill', `${color}`)

      portion.append('text')
        .attr('x', '60')
        .attr('y', `${yAxis + 15}`)
        .attr('fill', 'black')
        .text(`${deviationText[idx]}`)

      yAxis += 15;
    });


    // zoom in on state when clicked
    function clicked(event, d) {
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      event.stopPropagation();
      states.transition().style("fill", null);
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        d3.pointer(event, svg.node())
      );
    }
    
    function zoomed(event) {
      const {transform} = event;
      g.attr("transform", transform);
      g.attr("stroke-width", 1 / transform.k);
    }


    // resets view back to default sizing/position
    function reset() {
      states.transition().style("fill", null);
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
      );
    }

    // enables click-dragging the map around inside SVG element
    svg.call(zoom);

  }

}