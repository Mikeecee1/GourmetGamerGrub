import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CategoryPanel from './components/CategoryPanel';
import Basket from './components/Basket';
import mainsArray from './models/Categories';
import FoodItemPanel from './components/FoodItemPanel';
import FoodItem from './models/FoodItem';
import imgArray from './images/images';
import Order from './models/Order';

function App() {

  //variables
  const [showMenu, setShowMenu] = useState(false)
  const [catMenu, setCatMenu] = useState(mainsArray)
  const [catArray, setCatArray] = useState([0,1,2,3])
  const [order, setOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  //functions
  /**
   * 
   * @param {*} foodItem adds food Item to order or increments amount if already in order
   * updates state of order and total
   */
  function addItem(foodItem){
    console.log(order)
    if(!checkItem(foodItem.getId())){
       setOrder([
        ...order,{id: foodItem.getId(), name: foodItem.getName(), price: foodItem.getPrice(), quantity: 1}
       ])
       console.log(order)
    } else {
      setOrder( order.map ((item) => item.id === foodItem.getId()? {...item, quantity: item.quantity  + 1}: item));
      console.log(order)
    }
    setOrderTotal(getOrderTotal());
    console.log(order)
    console.log(orderTotal)
  }
  /**
   * 
   * @param {*} foodItem removes 1 from quantity from item if it is in order- returns filtered order of items 
   * with quantity >0
   */
  function removeItem(itemId){
    if(checkItem(itemId)){
      setOrder( order.map (item => item.id === itemId? {...item, quantity: item.quantity  - 1}: item));
    }
    setOrder(order.filter((item) => item.quantity > 0))
    getOrderTotal();
    console.log(order)
  }
  //helper functions
  // checks if item is in order
  
  function checkItem(itemId){
    if (order.some((item) => itemId === item.id))
    {
      return true;
    }
    return false;
  }
  // update total value of order
  function getOrderTotal(){
    let total=0;
    for(let item in order){
      total += item.quantity * item.price;
    } 
    setOrderTotal(total);
    console.log(orderTotal)
  }
  // console.log(order.getItems())
  // console.log(order.getTotal())

  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <h1>GourmetGamerGrub</h1>
        </div>

        <div className="menu">
        {/* conditional rendeering for menu and category displays */}
        { showMenu ? 
         (  
             
            mainsArray.map((item, index) => {
              // console.log(item.getName())
            
             return (
              
              <FoodItemPanel foodName={ item.getName()} foodImage={item.getImage()} foodDesc={item.getDescription()}  foodId={item.getId()} addItem={() => addItem(item)} removeItem={()=> removeItem(item.getId())}/>
             )
            }
            )
         )
         :
           

          <CategoryPanel menuItems={() => {setShowMenu(true)}} selectedMenu={catMenu} />
           
         
        }
          

        </div>

        <div className="basket">
          <Basket totalVal={orderTotal} basketItems={order} />
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
