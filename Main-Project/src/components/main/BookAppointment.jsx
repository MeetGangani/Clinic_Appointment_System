import React, { useState } from 'react'
// import DatePicker from "react-datepicker";
// import { DatePicker, Stack } from 'rsuite';
// import { FaCalendar, FaClock } from 'react-icons/fa';
// import { BsCalendar2MonthFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function BookAppointment() {
  // const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className='flex justify-center items-center' >
      {/* <label htmlFor="">Choose date for Treatment</label> */}
      <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date)}
      dateFormat="dd-MM-YYYY" 
      minDate={new Date()}
      // filterDate={ date => date.getDay()!== 6}
      showMonthDropdown
      />
    </div>
  )
}

export default BookAppointment
