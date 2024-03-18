// returns arrays of food  categories - 
//  to be replaced with DB data eventually, when able to access server

import imgArray from "../images/images.jsx";
// import FoodItem from "./FoodItem";

 class Category{
    
    constructor(catId, catName, catImage1, catImage2){
        this.categoryId = catId ;
        this.categoryName = catName;
        this.categoryImages = [catImage1,catImage2];
    }

    //getters - setters not necessary for now
    getID(){
        return this.categoryId
    }

    getName(){
        return this.categoryName
    }

    getImages(){
        return this.categoryImages
    }
}
 // category array to be exported - replaced with server code when able to connect
  const categoryArray = [
    new Category(1, 'Mains', imgArray[0], imgArray[1]),
    new Category(2, 'Sides', imgArray[2], imgArray[3]),
    new Category(3, 'Desserts', imgArray[4],imgArray[7]),
    new Category(4, 'Drinks', imgArray[5],imgArray[6])
]

export default categoryArray;