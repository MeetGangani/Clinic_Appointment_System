import React, { useState } from "react";
// import { FacebookLoginButton } from "react-social-login-buttons";
import {useForm} from "react-hook-form"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function NewLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const doUserRegistration = async function () {
  //   // Note that these values come from state variables that we've declared before
  //   const usernameValue = username;
  //   const passwordValue = password;
  //   try {
  //     // Since the signUp method returns a Promise, we need to call it using await
  //     const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
  //     alert(
  //       `Success! User ${createdUser.getUsername()} was successfully created!`
  //     );
  //     return true;
  //   } catch (error) {
  //     // signUp can fail if any parameter is blank or failed an uniqueness check on the server
  //     alert(`Error! ${error}`);
  //     return false;
  //   }
  // };

  const {register,handleSubmit} = useForm();

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
  }
  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col w-[300px] mt-[200px]  place-items-center border-2 p-10 rounded-xl">
        <h2 className=" font-bold text-center p-2  mb-2 text-2xl">
          User Registration
        </h2>
        <div className=" h-[1.5px] bg-EnglishViolet w-full mb-3 "></div>
        <div className=" flex flex-col w-full text-lg ">
          <input 
            type="text"
            size="large"
            placeholder="Username"
            className=" border-b-[1px]"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input 
            type="password"
            size="large"
            placeholder="Password"
            className=" border-b-[1px]"
            value={password}
            onChange={(event) => setPassword(event.target.value)
            }
          />
          {/* <input
            type="text"
            name=""
            id=""
            placeholder="Confirm Password"
            className=" border-b-[1px]"
          /> */}
          {/* <button className="  bg-MintGreen mt-4 rounded-lg border-[2px] font-bold"
           onClick={() => onSubmit()}
           type="primary"
           size="large"
           
           >
            Register
          </button> */}
          <LoginButton/>
          <LogoutButton/>
          {/* <input type="submit" value="submit"/> */}
        </div>
      </div>
    </div>
  );
}

export default NewLogin;





// <div className=" flex justify-center items-center mt-10 bg- ">
    //   <div class="  bg-LoginBack w-[400px] h-[450px] flex justify-center items-center  rounded-[15px] border-2 border-solid border-[rgba(255,0,0,0.349)] text-black ">
    //     <form action="">
    //       <h2>Login</h2>

    //       <div class="input-box">
    //         <span class="icon">
    //           <ion-icon name="mail"></ion-icon>
    //         </span>
    //         <input type="email" required />
    //         <label className=" text-black">Email</label>
    //       </div>

    //       <div class="input-box">
    //         <span class="icon">
    //           <ion-icon name="lock-closed"></ion-icon>
    //         </span>
    //         <input type="password" required />
    //         <label>Password</label>
    //       </div>

    //       <div class="remember-forgot">
    //         <label>
    //           <input type="checkbox" /> Remember me
    //         </label>
    //         <a href="#">Forgot Password?</a>
    //       </div>

    //       <button type="submit">Login</button>

    //       <div class="register-link">
    //         <p>
    //           Don't have an account? <a href="#">Register</a>
    //         </p>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    //  <div className=" ml-auto mt-52 border-inherit ">
    // <div className=" container w-[500px]  flex flex-col justify-center items-center rounded-lg border-2">
    //     <h2 className=" font-bold text-2xl mb-5">{'User Registration'}</h2>
    //     {/* <Divider /> */}

    //     <div className="form_wrapper flex flex-col">
    //       <input
    //         value={username}
    //         onChange={(event) => setUsername(event.target.value)}
    //         placeholder="Username"
    //         size="large"
    //         className="form_input"
    //       />
    //       <input
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         placeholder="Password"
    //         size="large"
    //         type="password"
    //         className="form_input"
    //       />
    //     </div>
    //     <div className="form_buttons">
    //       <button
    //         onClick={() => doUserRegistration()}
    //         type="primary"
    //         className="form_button"
    //         color={'#208AEC'}
    //         size="large"
    //       >
    //         Sign Up
    //       </button>
    //     </div>

    //   </div>
    // </div>