import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

function Home(props) {

  const navigate = useNavigate();
  return (
    <>
    <Navbar ></Navbar>

    <section class=" h-screen bg-[url('https://i.postimg.cc/sgH5hBXW/bg.jpg')]  w-full   bg-center bg-cover  flex items-center  ">

      <div class="max-w-[1200px] w-full text-black mx-auto my-0">
        <h2 className="text-5xl max-w-[600px] leading-[70px]">welcome to all dear patient</h2>
        <p className="font-light max-w-[600px] mt-[15px]">
          here we are happy to help. for the patient who is weak economically we give them discount of 30% off..
        </p>
        <button onClick={()=> navigate('/bookappointment')} className=" text-base cursor-pointer font-medium  mt-[38px] px-[30px] py-3 rounded-md border-[none] bg-[#8AFFC1] hover:bg[#9F4A54]">Book Appointment Now</button>
      </div>
    </section>

    <Footer/>
    </>
    // <div className='flex h-[665px] meet text-center '>
    //     <div >
    //     <img className=' h-[665px] rounded-xl border-4 border-gray-400' src="https://thumbs.dreamstime.com/b/welcome-to-our-clinic-smiling-doctor-opens-his-hands-flat-cartoon-style-design-vector-illustration-[#FFFFFF]-background-183747924.jpg" alt="" ///>
    //     </div>

    //     <div className=" w-96 max-h-full mx-auto my-auto ">
    //         <div><p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur aperiam est commodi ipsa eius omnis totam aut, itaque, repudiandae quaerat eaque, hic provident beatae ut possimus error veritatis sit doloremque facere neque. Praesentium tenetur adipisci molestias obcaecati magnam, illo alias officia nihil autem eum exercitationem incidunt pariatur sed consequatur magni velit explicabo suscipit sit repellat in fugit maxime voluptatum accusantium. Vitae odit quasi soluta enim, sunt, omnis magni eos laudantium dolores dolore explicabo minus voluptas ipsum consectetur illo quos sequi blanditiis doloremque asperiores maiores corporis aut nemo hic libero. Consectetur voluptatem quasi corrupti, in repellat voluptates! Aliquid.</p>
    //         </div>
    //         <button className=' my-4 border-2 rounded-md  cursor-pointer bg-[#C9EDDC] px-5 py-2 font-bold '>Book Appointment</button>
    //     </div>
    // </div>
  );
  // return (
  //     <div className="flex bg-[#563c5c] text-white p-4 sticky top-0">
  //       <div className=" justify-center ml-auto  ">
  //         <ul className="flex space-x-10">
  //           <li className="m-2 hover:underline cursor-pointer gap-2 hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/">Home </Link>
  //           </li>
  //           <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/BookAppointment">Book Appointment</Link>
  //           </li>
  //           <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/Medicines">Medicines</Link>
  //           </li>
  //           <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/News">News</Link>
  //           </li>
  //           <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/AboutDoctor">About Doctor</Link>
  //           </li>
  //           <li className="m-2 hover:underline cursor-pointer hover:text-[#D7FDF0]">
  //             {" "}
  //             <Link to="/Contact">Contact</Link>
  //           </li>
  //         </ul>
  //       </div>

  //       {/* <div className="ms-auto bg-[#D7FDF0] hover:bg-CambridgeBlue font-bold text-EnglishViolet rounded-md p-2 px-6 flex space-x-3 ">

  //         <div className=""><Link to='/Login'>Login</Link></div>

  //         <div><Link to="/GetStarted">Get started</Link></div>
  //       </div> */}
  //       {/* <div className=" ms-auto flex  space-x-5">
  //         <LoginButton />
  //         <LogoutButton />
  //       </div> */}
  //     </div>
  //     //  </div>
  //   );

}

export default Home;
