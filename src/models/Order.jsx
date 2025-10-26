// shopping basket functionality  - will now be used to process order instead of basket functionality TO BE DONE

import FoodItem from "./FoodItem";


class Order {
    /**
     * static variable to generate orderNum for order id
     */
    static orderNum = 1
    //constructor
    constructor() {
        //maybe customer id
        this.orderId = Order.orderNum;
        this.items = [];
        Order.orderNum++; //increments orderNum so it is unique for each order
    }

    // getters, setter, methods
    /**
     * returns customer/ customer id of order - implement later
     */
    // getCustomer(){
    //     return this.customer; // maybe customer id?
    // }
    
    /**
     * 
     * @returns order number
     */
    getOrderId(){
        return this.orderId;
    }
    /**
     *  need to change this to get key and value pairs -- may be better with map
     */
    getItems(){
        return this.items
    }
    /**
     * 
     * @param checks if food is already in order increments quantity if not adds item to array
     */
    // addItem(foodItem){  // food_id maybe
    //     if(this.items.some(obj => obj.id === foodItem.getId())){
    //         this.items.forEach(item =>{
    //             if(item.id === foodItem.getId()){
    //                item.quantity ++;
    //             }
    //         })
    //     } else {
    //         this.items.push({id: foodItem.getId(), name: foodItem.getName(), price: foodItem.getPrice(), quantity: 1});
    //     }
    // }
    /**
     * 
     * decrement the number of an item in basket - removes it if 0 of item left
     */
//     removeItem(foodItem){
//         if(this.items.some(obj => obj.id === foodItem.getId())){
//             this.items.forEach((item, index) =>{
//                 if(item.id === foodItem.getId()){
//                    item.quantity--;               
//                 }
//                 if(item.quantity < 1){
//                     this.items.slice(index, 1);  // remove item from array when quantity is 0
//                 }
//             })
//         }
//     }
//     /**
//      * returns total value of shopping basket - work in progress
//      */
//     getTotal(){
//         let total = 0;
//         this.items.forEach((item) => 
//             total += item.price * item.quantity
//         );
//         return total;
//     }
 }

export default Order