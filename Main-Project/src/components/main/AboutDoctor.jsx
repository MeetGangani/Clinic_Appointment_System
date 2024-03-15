import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from "../footer/Footer";
function AboutDoctor() {
  return (
    <>
    <Navbar/>

    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className=" w-auto ml-0  flex items-center justify-center flex-col lg:flex-row">
          <div className="lg:mr-8 ">
           
            <img
              className="h-64 w-[700px] rounded-full object-cover"
              src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg"  // Replace this with the actual path to your doctor's photo
              alt="Doctor Photo"
            />
          
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Dr. Nishant Rathod</h2>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi eget ex vehicula, nec ultrices
              velit tincidunt. Vestibulum et ornare elit. Nulla facilisi. Aliquam eget efficitur justo, non ultricies
              velit. Vestibulum sollicitudin felis non quam pretium, in suscipit dolor commodo.
            </p>
          </div>
        </div>
        

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">Specialization</h3>
          <ul className="mt-4">
            <li className="text-lg text-gray-600">Cardiology</li>
            <li className="text-lg text-gray-600">Neurology</li>
            <li className="text-lg text-gray-600">Internal Medicine</li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          <ul className="mt-4">
            <li className="text-lg text-gray-600">
              Doctor of Medicine (MD), University of Medical Sciences
            </li>
            <li className="text-lg text-gray-600">
              Master of Science in Cardiology, University of Health Sciences
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
          <ul className="mt-4">
            <li className="text-lg text-gray-600">
              Consultant Cardiologist at XYZ Hospital (2010 - Present)
            </li>
            <li className="text-lg text-gray-600">
              Resident Physician at ABC Medical Center (2005 - 2010)
            </li>
          </ul>
        </div>
      </div>
    </div>

   <Footer/>
    </>
  )
}

export default AboutDoctor
