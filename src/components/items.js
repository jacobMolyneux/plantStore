export default class Plant {
  constructor(name, price, quantity, image) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
  increaseQuantity() {
    this.quantity += 1;
    return `the quantity is ${this.quantity}`;
  }
  decreaseQuantity() {
    this.quantity -= 1;
    return `the quantity is now ${this.quantity}`;
  }
}
