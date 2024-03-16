import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <>
      <Navbar></Navbar>

      {/* <div className=" flex items-center justify-center text-[5rem] text-[black] h-[70vh] w-screen ">
        <div className="absolute w-full h-full bg-[url('https://i.pinimg.com/736x/77/5a/b8/775ab8f7dcb36967199e17b6a02b5a9b.jpg')]  bg-[100vw_70vh] opacity-70 z-[-1]" />
        Get In Touch
      </div> */}
      <div className=" h-[500px] flex border-[solid] border-[2px]">
        <div className=" h-[78%] w-6/12 text-xl p-[52px]">
          <div className="mb-8">
            <h2 className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Address
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id
              repellendus necessitatibus.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="flex items-center">
              <FaPhoneAlt className="mr-2" /> Phone
            </h2>
            <p>966943500</p>
          </div>

          <div className="mb-8">
            <h2 className="flex items-center">
              <FaEnvelope className="mr-2" /> Email
            </h2>
            <p>healtheasy96@gmail.com</p>
          </div>
        </div>



        {/* right side */}
        <div className=" w-[600px]  mt-[20px]   ">
          <div className=" w-full flex flex-col items-center justify-center ">
            <h1 className=" text-[40px] ">Send Message</h1>

            <form className="mb-6 w-full">
              <div className="mb-6">
                <label
                  htmlhtmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className=" p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                 
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
            </form>
            
          </div>
        </div>
      </div>

      

      <Footer />
    </>
  );
}

export default Contact;
