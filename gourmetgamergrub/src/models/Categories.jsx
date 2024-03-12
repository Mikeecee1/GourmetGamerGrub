// returns arrays of food Items with categories - maybe use category as key to display items in different cats?
// set up sample data - to be replaced with DB data eventually

import imgArray from "../images/images";
import FoodItem from "./FoodItem";

const mainsArray = [
 new FoodItem('Call of Dirty Burger',  8.00, 'Succulent double quarter pounder in a brioche bun with special game relish', imgArray[0],'main'),
 new FoodItem ('Assassin\'s Cheese Burger', 9.00, 'Succulent double quarter pounder in a brioche bun, topped with cheese with special game relish', imgArray[0],  'main'),
 new FoodItem ('Superkart', 20.00, 'Succulent double quarter pounder in a brioche bun, topped with cheese with special game relish', imgArray[0],  'main'),
 new FoodItem ('Ammo Crate', 25.00, 'Succulent double quarter pounder in a brioche bun, topped with cheese with special game relish', imgArray[0],  'main'),
 new FoodItem ('Legend of Pizza', 12.00, 'Succulent double quarter pounder in a brioche bun, topped with cheese with special game relish', imgArray[0],  'main')
];








export default mainsArray;