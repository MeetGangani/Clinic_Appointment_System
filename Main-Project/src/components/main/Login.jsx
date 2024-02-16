import React from "react";
// import "./LoginStyle.css";
// import "./LoginScript.js";
// import './loginscript'

function Login() {
  return (
    <div className=" *:box-border flex justify-center items-center flex-col h-screen -mt-5 mb-[50px] mx-0  ">
      <div className="bg-white shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[10px]" id="container">
        <div className="absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 opacity-0 z-[1] left-0">
          <form className="bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0" action="#">
            <h1>Create Account</h1>
            <div className="mx-0 my-5">
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input className=" bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]" type="text" placeholder="Name" />
            <input className=" bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]" type="email" placeholder="Email" />
            <input className=" bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]" type="password" placeholder="Password" />
            <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95">Sign Up</button>
          </form>
        </div>
        <div className="absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 z-[2] left-0">
          <form className="bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0" action="#">
            <h1>Sign in</h1>
            <div className="mx-0 my-5">
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"  href="#" >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs">or use your account</span>
            <input className=" bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]" type="email" placeholder="Email" />
            <input className=" bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]" type="password" placeholder="Password" />
            <a className="text-[#333] text-sm no-underline mx-0 my-[15px]" href="#">Forgot your password?</a>
            <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95">Sign In</button>
          </form>
        </div>
        <div className="absolute w-6/12 h-full overflow-hidden transition-transform duration-[0.6s] ease-[ease-in-out] z-[100] left-2/4 top-0">
          <div className="bg-no-repeat bg-cover bg-[0_0] text-white relative h-full w-[200%] translate-x-0 transition-transform duration-[0.6s] ease-[ease-in-out] -left-full ">
            <div className="absolute flex items-center justify-center flex-col text-center h-full w-6/12 translate-x-0 transition-transform duration-[0.6s] ease-[ease-in-out] px-10 py-0 top-0">
              <h1>Welcome Back!</h1>
              <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">
                To keep connected with us please login with your personal info
              </p>
              <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 bg-transparent "  id="signIn">
                Sign In
              </button>
            </div>
            <div className="absolute flex items-center justify-center flex-col text-center h-full w-6/12 translate-x-0 transition-transform duration-[0.6s] ease-[ease-in-out] px-10 py-0 top-0 right-0">
              <h1>Hello, Friend!</h1>
              <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">Enter your personal details and start journey with us</p>
              <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 bg-transparent " id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Login;
