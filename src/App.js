
import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    
     <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/cart" element={<Cart />}/>
     </Routes>
  
    </div>
  );
}

export default App;
