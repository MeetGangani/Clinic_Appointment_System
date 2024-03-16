import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import { DatePicker, Stack } from 'rsuite';
// import { FaCalendar, FaClock } from 'react-icons/fa';
// import { BsCalendar2MonthFill } from 'react-icons/bs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// import { DateRange } from 'rsuite/esm/DateRangePicker';
function BookAppointment() {


  // const [startDate, setStartDate] = useState(new Date());
  
  const [selectedDate, setSelectedDate] = useState(null);
  


  return (
    <>
      <Navbar />

      {/* <div className='flex justify-center items-center' > */}
      {/* <label htmlFor="">Choose date for Treatment</label> */}
      {/* <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date)} */}
      {/* dateFormat="dd-MM-YYYY"  */}
      {/* minDate={new Date()} */}
      {/* // filterDate={ date => date.getDay()!== 6} */}
      {/* showMonthDropdown */}
      {/* /> */}
      {/* </div>  */}

      {/* <div className="relative max-w-sm">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
  
</div> */}

      {/* <div className="bg-gradient-to-br  min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Appointment</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="appointmentDate" className="block text-gray-700">Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="appointmentTime" className="block text-gray-700">Appointment Time</label>
            <input type="time" id="appointmentTime" name="appointmentTime" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message (optional)</label>
            <textarea id="message" name="message" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Book Appointment</button>
          </div>
        </form>
      </div>
    </div> */}

      <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Appointment</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block  w-full rounded-md border-gray-300 border  shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="appointmentDate" className="block text-gray-700">Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="appointmentTime" className="block text-gray-700">Appointment Time</label>
            <input type="time" id="appointmentTime" name="appointmentTime" className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message (optional)</label>
            <textarea id="message" name="message" rows="3" className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>



      {/* <Footer/> */}
    </>
  );
}

export default BookAppointment;
