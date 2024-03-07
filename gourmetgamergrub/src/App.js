import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CategoryPanel from './components/CategoryPanel';
import Basket from './components/Basket';
import mainsArray from './models/Categories';
import FoodItemPanel from './components/FoodItemPanel';
import FoodItem from './models/FoodItem';
import imgArray from './images/images';

function App() {

  //variables
  const [showMenu, setShowMenu] = useState(false)
  const [catMenu, setCatMenu] = useState(mainsArray)
  const [catArray, setCatArray] = useState([0,1,2,3])
  

  //functions
  // function showMenu(){}

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
              console.log(item.getName())
            //  const tempItem = new FoodIteim(item.name, item.price, item.description, item.image, item.category)
             return (
              
              <FoodItemPanel foodName={ item.getName()} foodImage={item.getImage()} foodDesc={item.getDescription()}/>
             )
            }
            )
         )
         :
           

          <CategoryPanel menuItems={() => {setShowMenu(true)}} selectedMenu={catMenu} />
           
         
        }
          

        </div>

        <div className="basket">
          <Basket/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
