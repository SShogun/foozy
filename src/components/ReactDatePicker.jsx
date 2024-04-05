import React, { useState} from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ReactTimePicker from '../components/ReactTimePicker';

const ReactDatePicker = () => {
    const [value, onChange] = useState(new Date())
    const [dateMet, setDateMet] = useState(false)
    const [valueTime, timeValueA] = useState('12:00')
    const [timeMet, setTimeMet] = useState(false)
    
    const dateValue = (date) => {
        onChange(date)
        setDateMet(true)
        console.log(date)
    }
    const timeValue = (time) => {
        timeValueA(time)
        setTimeMet(true)
        console.log(time)
    }
    return (
        <>
        <DatePicker onChange={dateValue} value={value}  />
        <ReactTimePicker onChange={timeValue} value={valueTime}/>
        </>
    )
}
export default ReactDatePicker