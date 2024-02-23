
/**
 * Template for food items sold
 */
class FoodItem{
    constructor(id, name, price, options, image, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.options = options;
        this.image = image;
    }

    //getters & setters
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
    getOptions(){
        return this.options.toString();
    }
    /**
     * 
     * @param {adds an option to options array} newOption 
     */
    addOption(newOption){
        this.options.push(newOption);
    }
    /**
     * 
     * @param {*} oldOption removes an option from options array (mutates options)
     */
    removeOption(oldOption){
        let index = this.options.indexOf(oldOption);
        this.options = this.options.splice(index, 1);
    }
     /**
      * 
      * @returns the image associated with food item
      */
    getImage(){
        return this.image;
    }
}