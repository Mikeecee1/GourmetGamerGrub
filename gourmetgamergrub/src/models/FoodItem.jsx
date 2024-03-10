
/**
 * Template for food items sold
 */
class FoodItem{
    static foodID = 1; //static variable to add unique id for each item
    constructor( name, price,  description, image, category){
        this.id = FoodItem.foodID;   // not sure if needed atm
        this.name = name;
        this.price = price;
        // this.options = options; implement after other functions work
        // this.ingredients = ingredients
        this.image = image;
        this.description = description;
        this.category = category;
        FoodItem.foodID++;
    }

    //getters & setters
    /**
     * 
     * @returns id of food item
     */
    getId(){
        return this.id
    }
    /**
     * 
     * @returns name of item 
     */
    getName(){
        return this.name
    }

    /**
     * 
     * @returns the item's description
     */
    getDescription(){
        return this.description;
    }
    /**
     * 
     * @returns items price
     */
    getPrice(){
        return this.price;
    }
    /**
     * 
     * @param {sets new price for item} newPrice 
     */
    setPrice(newPrice){
        this.price = newPrice;
    }
    /**
     * 
     * @returns options array as a string
     */
    // getOptions(){
    //     return this.options.toString();
    // }
    // /**
    //  * 
    //  * @param {adds an option to options array} newOption 
    //  */
    // addOption(newOption){
    //     this.options.push(newOption);
    // }
    // /**
    //  * 
    //  * @param {*} oldOption removes an option from options array (mutates options)
    //  */
    // removeOption(oldOption){
    //     let index = this.options.indexOf(oldOption);
    //     this.options = this.options.splice(index, 1);
    // }
     /**
      * 
      * @returns the image associated with food item
      */
    getImage(){
        return this.image;
    }
    /**
     * 
     * @returns the category type for this item
     */
    getCategory(){
        return this.category;
    }

}

export default FoodItem