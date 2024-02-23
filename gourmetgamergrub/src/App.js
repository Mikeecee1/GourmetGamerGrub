import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner"></div>

        <div className="menu"></div>

        <div className="basket"></div>
        
      </header>
    </div>
  );
}

export default App;
