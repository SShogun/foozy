// Route imports
import Navbar from "./Navbar"
import Home from "./routes/Home"
import Menu from "./routes/Menu"
import Reservation from "./routes/Reservation"
import Footer from "./Footer"
import LoginSignupPage from "./routes/LoginSignupPage"

// React Routing imports
import {Routes, Route } from 'react-router-dom'
import { useState } from "react"

function App() {
  const [show, setState] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(product.id === item.id) {
        isPresent = true;
      }
    })
      if(isPresent) {
        return ;
      }
      setCart([...cart, item]);
  };

  return (
    <div className="box-border">
      <Navbar size={cart.length}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu handleClick={handleClick} />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/loginsignup" element={<LoginSignupPage />} />
      </Routes>
      <br />
      <Footer />
    </div>
  )
}

export default App