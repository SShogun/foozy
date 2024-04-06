import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import CustomSnackbar from './CustomSnackbar';

export default function ReactDateTimePicker() {
    const [value, onChange] = useState(new Date());
    const [showComponent, setShowComponent] = useState(false);

    function handleOnChange(date) {
        onChange(date);
        setShowComponent(true);
        console.log(date);
      }
    return (
        <div>
            <DateTimePicker onChange={handleOnChange} value={value} />
            <br />
            {showComponent && <CustomSnackbar />}
        </div>
    )
}