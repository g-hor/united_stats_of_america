export function createLegend(colors) {
  const deviationText = [
    "Two or More Standard Deviations (SD) Below National Average (NA)",
    "Between Two and One SD Below NA",
    "Between One SD Below NA and NA",
    "Between One SD Above NA and NA",
    "Between One and Two SD Above NA",
    "Two more More SD Above NA"
  ]

  // create color legend
  const legend = d3.select('.legend');
  let yAxis = 65;

  // iterate through colors to create colored rectangle + associated text description
  colors.forEach(function(color, idx) {
    legend.append('rect')
      .attr('x', '0')
      .attr('y', `${yAxis}`)
      .attr('width', '20')
      .attr('height', '80')
      .attr('fill', `${color}`)
      .attr('id', `color-${idx}`)
      .attr('idx', idx)
      .attr('data-text', `${deviationText[idx]}`)

    d3.select(`#color-${idx}`)
      .append('text')
      .attr('x', '23')
      .attr('y', `${yAxis}`)
      .attr('width', '200')
      .attr('height', '80')
      .text(`${deviationText[idx]}`)

    d3.select(`#color-${idx}`)
      .on('mouseover', (e) => {
        const el = e.target;
        const detail = el.dataset.text;
        const idx = Number(el.getAttribute('idx'));
        const legendDetail = document.getElementById("legend-detail");
        const offsetLeft = document.querySelector('.map-container').offsetLeft;
        const offsetTop = document.querySelector('.map-container').offsetTop;
        const legendWidth = document.querySelector('.legend').width.baseVal.value;
        
        legendDetail.innerText = detail;
        legendDetail.style.display = "block";
        legendDetail.style.left = `${offsetLeft + legendWidth - 1}px`;
        legendDetail.style.top = `${offsetTop + 65 + (80 * idx)}px`;
        legendDetail.style.backgroundColor = color;

        if (idx >= 0 && idx <= 1 || idx >= 4 && idx <= 5) {
          legendDetail.style.color = 'white';
        } else {
          legendDetail.style.color = 'black';
        }
      })
      .on('mouseout', () => {
        const legendDetail = document.getElementById("legend-detail");
        legendDetail.style.display = 'none';
      });


    yAxis += 80;
  });
}