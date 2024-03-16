import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { data } from "autoprefixer";
import toast from "react-hot-toast";
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let registrationSuccess = false;
  const [password, setPassword] = useState("");

  // function notify() {
  //   toast("Registration Successfull");
  // }
  // const checkres =  (e) =>
  // {
  //   if(e.status === 200)
  //   {
  //     window.alert("Registration Success")
  //   }
  //  else if(err.status === 400)
  //   {
  //     window.alert('User already registered')
  //   }
  //   else if(err.status === 500)
  //   {
  //     window.alert("User Creation Failed")
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      window.alert("Please enter the values");
    }

    axios({
      // Endpoint to send files
      url: "http://localhost:3000/api/v1/signup",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Registration Success");
          navigate("/login");
        }
      })
      .catch((err) => {
        if(err.response.status === 401)
        {
          toast.error("Invalid Email Address")
        }
        if(err.response.status === 402)
        {
          toast.error("Password should be strong")
        }

        if (err.response.data["success"] == false) {
          // window.alert(err.response.data["message"]);
          toast.error("User Already Registered")
        }

        console.log(err);
      });
  
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              method="POST"
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className=" text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#2563eb] focus:border-[#2563eb] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 outline-none"
                  required
                />
                <span
                    className=" mr-1"

                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }}/>
                    ) : (
                      <AiOutlineEye style={{ width: '24px', height: '24px' }}/>
                    )}{" "}
                  </span>
                </div>
              </div>
              {/* <div className=" text-left">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div> */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    required
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className=" w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
