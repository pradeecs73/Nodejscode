const eventemitter=require('events');
class PizzaShop extends eventemitter{
     
    constructor(){
        super();
        this.orderNumber=0;
    }

    order(size,topping){
        this.orderNumber++;
        this.emit('order',size,topping);
    }

    displayOrderNumber(){
        console.log(`current order number is : ${this.orderNumber}`);
    }
}

module.exports=PizzaShop;