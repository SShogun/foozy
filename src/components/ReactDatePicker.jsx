import React, { useState} from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import AutohideSnackbar from '../components/AutohideSnackbar';

const ReactDatePicker = () => {
    const [value, onChange] = useState(new Date())
    const [dateMet, setDateMet] = useState(false)
    const dateValue = (date) => {
        onChange(date)
        setDateMet(true)
        console.log(date)
    }
    return (
        <>
        <DatePicker onChange={dateValue} value={value}  />
        {dateMet && <AutohideSnackbar /> }
        
        </>
    )
}
export default ReactDatePicker