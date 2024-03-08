import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Home from "../Home";
import Navbar from "../../navbar/Navbar";


function Login({setIsLoggedIn, isLoggedIn}) {


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    axios({
      url: "http://localhost:3000/api/v1/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("User Logged in successfully");
          setIsLoggedIn = true;
          navigate("/home" , {setIsLoggedIn, isLoggedIn});

          // <Navbar IsLoggedIn = "true"/>
        }
      })

      .catch((err) => {
        // if(err.status === 401)
        // {
        //   toast.error("User not Registered")
        // }
        // if(err.status === 403)
        // {
        //   window.alert('Invalid password')
        // }
        // if(err.status === 500)
        // {
        //   window.alert("Login failed")
        // }
        toast.error("Email or Password incorrect");
      });


    // const configuration = {
    //   method: "post",
    //   url: "http://localhost:3000/login",
    //   data: {
    //     email,
    //     password,
    //   },
    // };

    // await axios(configuration)
    //   .then((result) => {
    //     if (result.status === 200) {
    //       window.alert("Successfully Login");
    //       navigate("/home");
    //     }
    //     else if(result.status === 400) {
    //         window.alert("Please fill the data first!!")
    //     }
    //     else {
    //       window.alert("Failed to Login");
    //     }

    //     // setRegister(true);
    //   })
    //   .catch((error) => {
    //     window.alert("Already logged in");
    //     error = new Error();
    //   });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleLogin(e)}
            >
              <div className=" text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="Enter Email id"
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
                  {/*  */}
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 outline-none"
                    required
                    placeholder="Enter Password"
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
            
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#93c5fd] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb] dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={(e) => handleLogin(e)}
                type="submit"
                className=" w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="/"
                  className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
