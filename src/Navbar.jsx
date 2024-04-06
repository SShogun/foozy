import React from 'react'
import logo from './img/logo1.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

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
              <Button variant="contained" color='success' sx={{
                color: 'white',
                bgColor: 'black',
                marginRight: '5px'
            }}><Link to="/loginsignup">Login</Link></Button>
            </div>
        </div>
    )
}
export default Navbar