import React from 'react'

function Navbar() {
  return (
    <div className='flex bg-EnglishViolet text-white p-4 sticky top-0'>
    
    
    <div className=' justify-center ml-auto  '>
      <ul className='flex space-x-10'>
        <li className='m-2 hover:underline cursor-pointer gap-2'>Home</li>
        <li className='m-2 hover:underline cursor-pointer'>Book Appointment</li>
        <li className='m-2 hover:underline cursor-pointer'>Medicines</li>
        <li className='m-2 hover:underline cursor-pointer'>About Doctor</li>
        <li className='m-2 hover:underline cursor-pointer'>Contact</li>
      </ul>
    </div>
        <button className='ms-auto bg-MintGreen hover:bg-CambridgeBlue font-bold text-EnglishViolet rounded-md p-2 px-6'>Login</button>


    </div>
  )
}

export default Navbar
