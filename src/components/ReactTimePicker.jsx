import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function ReactTimePicker() {
    const [value, onChange] = useState('12:00');
  
    return (
      <div>
        <TimePicker onChange={onChange} value={value} />
      </div>
    );
  }