import { useState } from 'react';
import './App.css';
import Meme from './Components/Meme';
import Nav from './Components/Nav';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      return !prev
    })
  }

  return (
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
    </div>
  );
}

export default App;
