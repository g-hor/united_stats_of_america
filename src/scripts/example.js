class Example {
  constructor(ele) {
      this.ele = ele
      this.ele.innerHTML = "<h1>Capy's ALIVE!!!</h1>"

      this.handleClick = this.handleClick.bind(this);
      this.ele.addEventListener("click", this.handleClick)
  }

  handleClick() {
      this.ele.children[0].innerText = "Ouch, that capyhurt!"
  }
}

export default Example;