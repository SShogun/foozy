import Navbar from "./Navbar"
import Home from "./routes/Home"
import Menu from "./routes/Menu"
import Reservation from "./routes/Reservation"
import {Routes, Route } from 'react-router-dom'
import Footer from "./Footer"
import { useState } from "react"
function App() {
  const [show, setState] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.some((product) => item.id === product.id)) {
      return;
    }
  
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="box-border">
      <Navbar size={cart.length}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu handleClick={handleClick} />}/>
        <Route path="/reservation" element={<Reservation />}/>
      </Routes>
      <br />
      <Footer />
    </div>
  )
}

export default App