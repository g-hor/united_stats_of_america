export function calculateSD(arr) {
  const length = arr.length;
  const avg = arr.reduce((x, y) => x + y) / length;
  const deviations = arr.map(n => n - avg);
  const squareDevs = deviations.map(n => Math.pow(n, 2));
  const variance = squareDevs.reduce((x, y) => x + y) / length;
  return Math.sqrt(variance);
}


// removes commas from a stringified number
export function parse(numString) {
  if (numString.includes(',')) {
    return parseInt(numString.replace(/,/g, ''));
  } else {
    return parseInt(numString);
  }
}
