
import './App.css';
import { useState , useEffect} from 'react';
import CategoryPanel from './components/CategoryPanel';
import Basket from './components/Basket';
import mainsArray from './models/Categories';
import FoodItemPanel from './components/FoodItemPanel';
// import FoodItem from './models/FoodItem';
// import imgArray from './images/images';
// import Order from './models/Order';

function App() {

  //variables
  const [showMenu, setShowMenu] = useState(false)
  const [catMenu, setCatMenu] = useState(mainsArray)
  // const [catArray, setCatArray] = useState([0,1,2,3])
  const [order, setOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  
  //functions
  /**
   * 
   * @param {*} foodItem adds food Item to order or increments amount if already in order
   * updates state of order and total
   */
  function addItem(foodItem){
    let newOrder = []
    if(!checkItem(foodItem.getId())){
        const newItem = {id: foodItem.getId(), name: foodItem.getName(), price: foodItem.getPrice(), quantity: 1}  
        if(order.length === 0){
          newOrder  =  [newItem]   
          setOrder(newOrder)
        } else {    
          newOrder =  [...order,newItem]
          setOrder(newOrder)      
        } 
    } else {
      newOrder = order.map ((item) => item.id === foodItem.getId()? {...item, quantity: item.quantity  + 1}: item);
      setOrder(newOrder)
    }
    updateOrderTotal(newOrder);
  }
  /**
   * 
   * @param {*} foodItem removes 1 from quantity from item if it is in order- returns filtered order of items 
   * with quantity >0
   */
  function removeItem(foodItem){
    // console.log(foodItem)
    if(checkItem(foodItem.getId())){
      setOrder( order.map ((item) => item.id === foodItem.getId()? {...item, quantity: (item.quantity = item.quantity -1)}: item));  
    }
    const filteredOrder = order.filter((item) => item.quantity !== 0)
    setOrder(filteredOrder)
    updateOrderTotal(filteredOrder);
    
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
  function updateOrderTotal(ord){  
    let total=0;
    ord.forEach((item) => {
      total += item.quantity * item.price;   
    } )
    setOrderTotal(total);  
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
              
              <FoodItemPanel foodName={ item.getName()} foodImage={item.getImage()} foodDesc={item.getDescription()}  foodId={item.getId()} addItem={() => addItem(item)} removeItem={()=> removeItem(item)}/>
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
