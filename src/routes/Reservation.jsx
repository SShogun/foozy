import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ReactDateTimePicker from '../components/ReactDateTimePicker';
import { useState } from 'react';
import { Button } from '@mui/material';

const Reservation = () => {
    return ( 
        <div className="h-[90vh] w-100 bg-[rgba(255,255,255,0.9)] flex flex-row justify-center mt-20 content-center gap-12">
            <div className='h-[60vh] grid gap-4 grid-flow-row grid-rows-6 grid-cols-2 w-[60vw]'>
                <TextField required id="outlined-basic" label="First Name" variant="outlined"/>
                <TextField required id="outlined-basic" label="Last Name" variant="outlined"/>
                <TextField required id="outlined-basic" label="Email" type='email'
                variant="outlined" className='col-span-2'/>
                <TextField
                  required
                  id="outlined-basic"
                  label="Number"
                  type='number'
                  variant="outlined"
                  />
                <TextField
                  required
                  id="outlined-basic"
                  label="#of Guests"
                  type='number'
                  variant="outlined"
                  />
                <Divider className='col-span-2 h-10' />
                <div className='grid grid-flow-row grid-row-2 gap-16'>
                    <span className='flex items-center h-5 col-span-2'>
                        <h1 className='h-[20px] text-7xl'>Reservation</h1>
                    </span>
                    <ReactDateTimePicker />
                </div>

            </div>


        </div>
    )
}
export default Reservation