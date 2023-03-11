export function renderMap() {

  const width = 900;
  const height = 600;

  const svg = d3
    .select('svg')
    .attr('width', width)
    .attr('height', height);
  
  const projection = d3
    .geoAlbersUsa()
    .scale(500)
    .translate([width / 2, height / 1.4]);

  const path = d3.geoPath(projection);
  const g = svg.append('g');

  fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .then(data => {
      const states = topojson.feature(data, data.objects.states);

      g.selectAll('path')
        .data(states.features)
        .enter()
        .append('path')
        .attr('class', 'state')
        .attr('d', path);
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