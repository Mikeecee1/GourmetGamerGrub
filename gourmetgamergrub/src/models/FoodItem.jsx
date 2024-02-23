
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
     * @returns 
     */
    getOptions(){
        return this.options.toString();
    }
}