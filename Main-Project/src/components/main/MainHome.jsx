import React from 'react'

function MainHome() {
  return (
    <>
    <section class=" h-screen bg-[url('https://i.postimg.cc/sgH5hBXW/bg.jpg')]  w-full   bg-center bg-cover  flex items-center  ">
        <div class="max-w-[1200px] w-full text-black mx-auto my-0">
          <h2 className="text-5xl max-w-[600px] leading-[70px]">
            welcome to all dear patient
          </h2>
          <p className="font-light max-w-[600px] mt-[15px]">
            here we are happy to help. for the patient who is weak economically
            we give them discount of 30% off..
          </p>
          <button
            onClick={() => navigate("/bookappointment")}
            className=" text-base cursor-pointer font-medium  mt-[38px] px-[30px] py-3 rounded-md border-[none] bg-[#8AFFC1] hover:bg[#9F4A54]"
          >
            Book Appointment Now
          </button>
        </div>
      </section>

    </>
  )
}

export default MainHome
