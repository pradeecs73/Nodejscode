const pizzaShop=require('./eventclass');
const drinkMachine=require('./drink-machine');

const pizzaShopObject=new pizzaShop();
const drinkMachineObject=new drinkMachine();

pizzaShopObject.on('order',(size,topping)=>{
     console.log(`order recieved baking a ${size} with topping ${topping}`);
     drinkMachineObject.serveDrink(size);
});

pizzaShopObject.order('large','mushroom');
pizzaShopObject.displayOrderNumber();