let mapData;
let statData;
let svg = d3
  .select('.us-map')
  .attr('viewBox', [0, 0, width, height])
  .on("click", reset);

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
  .then(data => {
    mapData = topojson.feature(data, data.objects.states).features;
    console.log(mapData);

    d3.csv("NSDUH_count/NSDUHsaeTotalsTab30-2019.csv")
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
    .attr('fill', (mapItem) => {

    })
}


