import React from "react";
import Navbar from "../navbar/Navbar";
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div id="animation-carousel" class="relative w-full" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-1.svg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-2.svg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div
          class="hidden duration-200 ease-linear"
          data-carousel-item="active"
        >
          <img
            src="/docs/images/carousel/carousel-3.svg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-4.svg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
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
