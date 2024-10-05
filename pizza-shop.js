const EventEmitter = require('node:events');
class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.order_number = 0;
    }

    order(size, topping) {
        this.order_number++;
        this.emit('order-pizza', size, topping);
    }

    displayOrderNumber() {
        console.log(`Order number is ${this.order_number}.`);
    }
}
module.exports = PizzaShop;