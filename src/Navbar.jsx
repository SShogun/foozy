import React from 'react'
import logo from './img/logo1.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const Navbar = ({size}) => {

    return (
        <div className="bg-[#3DA9FC] h-[4rem] w-100 grid grid-flow-col grid-cols-3 justify-between items-center p-5 py-1 text-black overflow-x-hidden sticky">
            {/* brand section */}
            <div className=" h-full grid grid-flow-col items-center">
                <img src={logo} width={180} />
            </div>

            {/* menu options */}
            <nav className=" h-full col-span-1">
                <ul className='grid grid-flow-col text-xl justify-between align-middle pt-3 text-[#f4f4f4]'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                </ul>

            </nav>

            {/* theme switch and login signup */}
            <div className="h-[45px] rounded-full flex justify-center items-center">
              <Button variant="contained"  sx={{
                color: 'white',
                bgColor: 'black',
                marginRight: '5px'
            }}>Login</Button>
              <Button color="success" variant="contained" sx={{
                color: 'white',
                bgColor: 'black',
                marginLeft: '5px'
            }}>Sign Up</Button>
            <section className=' grid grid-flow-col ml-16'>
                {/* <Badge badgeContent={size} color="secondary">
                    <ShoppingCartIcon sx={{color: 'white'}} />
                </Badge> */}
                <p>{size}</p>
            </section>
            </div>
        </div>
    )
}
export default Navbar