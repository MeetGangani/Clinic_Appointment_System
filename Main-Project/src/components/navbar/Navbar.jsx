import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import LoginButton from "../main/LoginButton";
// import LogoutButton from "../main/LogoutButton";
import axios from "axios";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };  


  const navigate = useNavigate();
  return (
    <div className="flex bg-[#563c5c] text-white p-4 sticky top-0">
      <div className=" justify-center ml-auto  ">
        <ul className="flex space-x-10">
          <li className="m-2 hover:underline cursor-pointer gap-2 hover:text-[#D7FDF0]">
            {" "}
            <Link to="/home">Home </Link>
          </li>
          <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
            {" "}
            <Link to="/BookAppointment">Book Appointment</Link>
          </li>
          <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
            {" "}
            <Link to="/Medicines">Medicines</Link>
          </li>
          <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
            {" "}
            <Link to="/News">News</Link>
          </li>
          <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
            {" "}
            <Link to="/AboutDoctor">About Doctor</Link>
          </li>
          <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
            {" "}
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* <div className="ms-auto  "> */}
        {/* {isLoggedIn && (
          <button className=" text-gray-700 cursor-pointer">Log In</button>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => {
              toast.success("Logged Out Successfully");
              navigate('/login')
              
            }}
            className=" text-gray-700 cursor-pointer"
          >
            Log Out
          </button>
        )} */}

<div className=" ms-auto relative">
      {/* Dropdown Toggle */}
      <div className="flex items-center ">
        <button
          className="flex  text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
          onClick={toggleDropdown}
        >
          <img
            className=" w-[40px] h-[40px] rounded-full "
            src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            alt="User"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-700">User Name</div>
            <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
              Profile Settings
            </div>
           
            <button onClick={()=> navigate('/login')} className=' w-full py-2 px-4 text-left text-sm text-gray-700 cursor-pointer hover:bg-gray-100'>Logout</button>
            {/* <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
              Logout
            </div> */}
            
          </div>
        </div>
      )}
    </div>



      {/* </div> */}
    </div>
  );
}

export default Navbar;
