export function renderMap() {
  fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .then(data => {
      const width = 955;
      const height = 520;

      const svg = d3
        .select('.us-map')
        // .attr('width', '100%')
        // .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height])
        .on("click", reset);
  
      const projection = d3
        .geoAlbersUsa()
        // .scale(900)
        // .translate([width/3, height/2]);

      const path = d3.geoPath(projection);
      const g = svg.append('g');

      function zoomed(event) {
        const {transform} = event;
        g.attr("transform", transform);
        g.attr("stroke-width", 1 / transform.k);
      }
      
      function reset() {
        states.transition().style("fill", null);
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
        );
      }
      
      function clicked(event, d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();
        states.transition().style("fill", null);
        d3.select(this).transition().style("fill", "yellow");
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node())
        );
      }

      const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

      const states = g.append("g")
        .attr("fill", "#444")
        .attr("cursor", "pointer")
        .selectAll("path")
        .data(topojson.feature(data, data.objects.states).features)
        .join("path")
        .on("click", clicked)
        .attr("d", path);

      states.append("title")
        .text(d => d.properties.name);

        g.append("path")
          .attr("fill", "none")
          .attr("stroke", "white")
          .attr("stroke-linejoin", "round")
          .attr("d", path(topojson.mesh(data, data.objects.states, (a, b) => a !== b)));

        svg.call(zoom);

      
      
        return svg.node();
    });


  // d3.json(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)
  //   .then(data => {
  //     const states = topojson.feature(data, data.objects.states);
  //     g.selectAll('path')
  //       .data(states.features)
  //       .enter()
  //       .append('path')
  //       .attr('class', 'state')
  //       .attr('d', path);
  //   });
}