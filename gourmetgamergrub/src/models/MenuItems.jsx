// declares array of all food items available - functions returns an array of items which match category 
// replace with server code eventually


import imgArray from "../images/images";
import categoryArray, { Category } from "./Category";
import FoodItem from "./FoodItem";


const menuArray = [
 new FoodItem('Call of Dirty Burger',  8.00, 'Succulent double quarter pounder in a brioche bun with special gamer relish', imgArray[0],1),
 new FoodItem ('Assassin\'s Cheese Burger', 9.75, 'Hot & Spicy Falafel Burger in a brioche bun, topped with Halloumi cheese and Harissa -Its a killer!', imgArray[0],  1),
 new FoodItem ('Super Mmm.. kart', 20.00, 'A box of top treats to keep you on track', imgArray[0],  3),
 new FoodItem ('Ammo Crate', 25.00, 'Lods of tasty goodies to keep you loaded up for your game', imgArray[0], 1),
 new FoodItem ('Legend of Pizzelda', 12.50, 'Our most adventurous home made pizza', imgArray[0],  1)
];

/**
 * returns an array of FoodItem objects matching a specified category
 *   
 */
export function getMenuItems(category){
    const catArray = menuArray.filter((item) => 
        item.getCategory() == category
    )
    return catArray;
}


export default menuArray;