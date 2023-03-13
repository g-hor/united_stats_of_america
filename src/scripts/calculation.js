export function calculate(url, colors) {
  let pairs = {};
  let max;
  let min;
  
  d3.csv(url, function(stats) {
    let avg = (
      (parseInt(stats["12-17 Estimate"]) + 
      parseInt(stats["18 or Older Estimate"]) + 
      parseInt(stats["18-25 Estimate"]) + 
      parseInt(stats["26 or Older Estimate"])
      ) / 4
      );
      // console.log(stats);
      if (avg < min) min = avg;
      if (avg > max) max = avg;
      pairs[stats["State"]] = avg;
    })
    
    let range = max - min;
    let firstQuartile = min + (range / 4);
    let secondQuartile = min + (range / 2);
    let thirdQuartile = min + (range * 3 / 4);

    console.log(pairs['Alabama']);

    return pairs;
}