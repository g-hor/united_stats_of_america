export function fetchAndRender(url, colors) {
  const percentageText = [
    "Below 90% of National Average",
    "Between 90% and 95% of National Average",
    "Between 95% and 100% of National Average",
    "Between 100% and 105% of National Average",
    "Between 105% and 110% of National Average",
    "Over 110% of National Average"
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
          debugger
          renderMap();
        })
    })
  
  function renderMap() {
    const nationalData = csvData[0]
    console.log(nationalData);
    const nationalAvg = parseFloat(nationalData["18 or Older Estimate"])

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
        stateData ||= {"12-17 Estimate": "0", "18-25 Estimate": "0", "18 or Older Estimate": "0"}

        let stateAvg = parseFloat(stateData["18 or Older Estimate"]);
        let difference = nationalAvg - stateAvg;

        if (difference <= -3) {
          return colors[0];
        } else if (difference > -3 && difference <= -1.5) {
          return colors[1];
        } else if (difference > -1.5 && difference <= 0) {
          return colors[2];
        } else if (difference > 0 && difference <= 1.5) {
          return colors[3];
        } else if (difference > 1.5 && difference <= 3) {
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
        .attr('x', '100')
        .attr('y', `${yAxis + 15}`)
        .attr('fill', 'black')
        .text(`${percentageText[idx]}`)

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

    // removes commas from a stringified number
    function parse(numString) {
      if (numString.includes(',')) {
        return parseInt(numString.replace(/,/g, ''));
      } else {
        return parseInt(numString);
      }
    }

    // enables click-dragging the map around inside SVG element
    svg.call(zoom);
  }

}