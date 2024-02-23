// shopping basket functinality
import FoodItem from "./FoodItem";
class Order {
    /**
     * static variable to generate orderNum for order id
     */
    static orderNum = 0
    //constructor
    constructor(customer) {
        this.customer = customer;//maybe customer id
        this.orderId = orderNum;
        this.items = {}
        orderNum++; //increments orderNum so it is unique for each order
    }

    // getters, setter, methods
    /**
     * returns customer/ customer id of order
     */
    getCustomer(){
        return this.customer; // maybe customer id?
    }
    
    /**
     * 
     * @returns order number
     */
    getOrderId(){
        return this.orderId;
    }
    /**
     * 
     * @param checks if food is already in order, increments if not
     */
    addItem(food){
        if(!this.items.includes(food)){
            this.items[food] = 1;
        } else {
            this.items[food] ++;
        }
    }
    /**
     * 
     * decrement the number of an item in basket - removes it if 0 of item left
     */
    removeItem(food){
        if(this.items.includes(food)){
            this.items[food] -= 1;
        }
        if(this.items[food] == 0){
            delete this.items.food;
        }
    }
    /**
     * returns total value of shopping basket - worki in progress
     */
    getTotal(){
        let total = 0;
        for(const[key, value] of Object.entries(this.items)){
            total += key.getPrice() * value;
        }
        return total;

    }



}