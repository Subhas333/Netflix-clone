import React from 'react'

export const Navbar = () => {
  return (
   <div className="main flex lg:justify-around md:justify-around justify-between py-5 px-5 items-center">
    <div className="left">
      <div className="netflixlogo">
        <img className="w-32 lg:w-44 " src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" srcset="" />
      </div>
    </div>
    <div className="right flex items-center ">
      <div className="selector cursor-pointer bg-[#111112] text-white mx-4 lg:px-5 md:px-5 px-3 rounded-md border-[1.5px] border-gray-200 hover:ring-gray-200 opacity-75" >
        <select name='' id='' className='bg-transparent outline-none'>
          <option value="English">English</option>
          <option value="Nepali">Nepali</option> 
        </select>
      </div>
      <button className="signup bg-[#e50815] text-white px-5 py-1.5 rounded-lg font-bold hover:bg-inherit">Sign In</button>
    </div>
   </div>
  )
}
