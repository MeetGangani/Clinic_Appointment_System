import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import LoginButton from "../main/LoginButton";
// import LogoutButton from "../main/LogoutButton";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

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

      <div className="ms-auto bg-[#D7FDF0] hover:bg-CambridgeBlue font-bold text-EnglishViolet rounded-md p-2 px-6 flex space-x-3 ">
        {isLoggedIn && (
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
        )}
      </div>
    </div>
  );
}

export default Navbar;
