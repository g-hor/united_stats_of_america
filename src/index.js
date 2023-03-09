import Example from "./scripts/example"; // syntax to import our class file

document.addEventListener("DOMContentLoaded", () => {
  // console.log('wassup world');
  // console.log('u ok buddy');

  const main = document.getElementById("main"); // grabs HTML element to instantiate new Class instance
  new Example(main); 
})