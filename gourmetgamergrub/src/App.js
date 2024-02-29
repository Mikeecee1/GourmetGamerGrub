import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CategoryPanel from './components/CategoryPanel';
import MenuPanel from './components/MenuPanel';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const tempArr = [0, 1, 2, 3, 4, 5, 6];
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
            tempArr.map((item) => {
             return (<MenuPanel/>)
            }
            )
         )
         :
         ( <CategoryPanel />)
        }
          

        </div>

        <div className="basket"></div>
        
      </header>
    </div>
  );
}

export default App;
