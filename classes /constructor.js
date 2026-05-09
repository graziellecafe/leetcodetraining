class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");
let cookieTwo = new Cookie("blue");

console.log(cookieOne.getColor()); // green
console.log(cookieTwo.getColor()); // blue

console.log(cookieOne.setColor("yellow")); // undefined
console.log(cookieOne.getColor()); // yellow
