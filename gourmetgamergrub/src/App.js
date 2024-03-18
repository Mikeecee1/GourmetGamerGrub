
import './App.css';
import { useState , useEffect} from 'react';
import CategoryPanel from './components/CategoryPanel';
import Basket from './components/Basket';
import FoodItemPanel from './components/FoodItemPanel';
import menuArray, { getMenuItems } from './models/MenuItems';
import categoryArray from './models/Category';
import Navigation from './components/Navigation';



function App() {

  //variables
  const [showMenu, setShowMenu] = useState(false);
  const [catMenu, setCatMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [categories, setCategories] = useState(categoryArray);
  const [navigation, setNavigation] = useState([{id: 0, name: 'Home'}]);
  const [checkOut, setCheckOut] = useState(false);
  
  //functions
  /**
   * 
   * @param {*} sets the menu to show according to selected menu
   */
  function selectCategory(category){
    console.log(category)
    if(category === 0){
      setShowMenu(false)
    }
    else{
    let menuToShow;
    menuToShow = getMenuItems(category);
   
    setNavBar(category);
    
    setCatMenu(menuToShow);
    setShowMenu(true);
   
  }
  }
  function setNavBar(category){
    let navArray = [{id:0, name:'Home'}]
    /**
     * helper function sets items for navigaton bar - Home + menus not selected
     */
    categoryArray.map((cat) =>
    {
      navArray = [...navArray,{id:cat.getID(),name: cat.getName()}]
      
    })
    navArray = navArray.filter((item) => item.id != category)
     setNavigation(navArray)
  }
  
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
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <h1 id='bannerTitle'>GourmetGamerGrub</h1>
        </div>
        { !checkOut &&
        <div className='navigation' style={{height: showMenu ?  '4vh': '0'}}>
          {showMenu ?  
       
          navigation.map((nav) => {
            return(
              
              <Navigation navName={nav.name}  navClick = {() => selectCategory(nav.id) } />
            )
          })
        :
        null
        }
        </div>
        }
        { !checkOut &&
        <div className="menu"style={{height: showMenu ?  '48vh': '52vh'}}>
          
        {/* conditional rendeering for menu and category displays */}

        
        { showMenu ? 
         (  
             
            catMenu.map((item, index) => {
              // console.log(item.getName())
            
             return (
              
              <FoodItemPanel foodName={ item.getName()} foodImage={item.getImage()} foodDesc={item.getDescription()}  foodId={item.getId()} addItem={() => addItem(item)} removeItem={()=> removeItem(item)} foodPrice={item.getPrice()}/>
             )})

         )
         
         :

          (
            categories.map((category) => {
           return(
          <CategoryPanel menuItems={() => {setShowMenu(true)}} selectedMenu={() => selectCategory(category.getID())} catImage={category.getImages()} menuName={category.getName()}/>
          )})
         )
        }  
   
        </div>
        }

        <div className="basket" style={{height: checkOut ?  '60vh': ''}}>
          <Basket totalVal={orderTotal} basketItems={order} coButton={() => setCheckOut(true)} toggle= {!checkOut}/>
          
        </div>
        {  checkOut &&
          <div className='message'>
                 <h2>Thank You For Your Order</h2>
                 <h2>Happy Gaming</h2>
          </div>
        }
        
      </header>
    </div>
  );
}

export default App;
