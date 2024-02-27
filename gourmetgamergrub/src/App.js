import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CategoryPanel from './components/CategoryPanel';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <h1>GourmetGamerGrub</h1>
        </div>

        <div className="menu">
          <CategoryPanel />
        </div>

        <div className="basket"></div>
        
      </header>
    </div>
  );
}

export default App;
