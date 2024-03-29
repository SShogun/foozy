import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

const Reservation = () => {
    return ( 
        <div className="h-[80vh] w-100 bg-[rgba(255,255,255,0.9)] flex justify-center pt-10 flex-row">
            <div className='grid gap-4 grid-flow-row grid-rows-6 grid-cols-2'>
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
                <span className='flex items-center h-5 col-span-2'>
                    <h1 className='h-[20px] text-5xl'>Reservation</h1>
                </span>
                <span>
                {/* <DateRangePicker /> */}
                </span>
            </div>
        </div>
    )
}
export default Reservation