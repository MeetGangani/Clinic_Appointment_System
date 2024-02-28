import React, { useState, useEffect, useRef } from "react";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <button
        
        className=" ` flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-[#FFFFFF]"
        type="button"
      >
        <img
          className="w-8 h-8 me-2 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU"
          alt="user photo"
        />
        {user.name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownAvatarName"
        className="   z-10 hidden bg-[#FFFFFF] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 "
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-[#FFFFFF]">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#FFFFFF]"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#FFFFFF]"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#FFFFFF]"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#FFFFFF]"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
