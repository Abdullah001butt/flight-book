import React, { useState } from 'react'
import home_page_img_1 from "../assets/home_page_img_1.webp"
import home_page_img_2 from "../assets/home_page_img_2.webp"
import home_page_img_3 from "../assets/home_page_img_3.webp"


const Home = () => {
  const [imgSelect, setImgSelect] = useState(0);
  const imgs = [home_page_img_1, home_page_img_2, home_page_img_3];

  return (
    <div className='h-full'>
      <div className='relative flex justify-center'>
        <div className='absolute left-10 px-4 py-4 bg-gray-200 bg-opacity-90' style={{ width: "27rem" }}>
          <div className='text-3xl font-medium text-gray-500 my-2'>
            <h1>Fly nonstop from Abu Dhabi to Baghdad</h1>
          </div>
          <div className='text-xl font-semibold text-stone-700 mb-4'>
            <h1>One way from  <span className='text-primary font-bold'>AED 459</span></h1>
          </div>
          <div>
            <button className='bg-primary text-white px-4 py-2 font-medium'>SEARCH and BOOK</button>
          </div>
        </div>
        <div className='absolute bottom-0'>
          <div className=' flex gap-1.5 bottom-4'>
            <button
              className='border border-white rounded-full h-3 w-3'
              style={imgSelect == 0 ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}
              onClick={() => setImgSelect(0)}
            ></button>
            <button
              className='border border-white rounded-full h-3 w-3'
              style={imgSelect == 1 ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}
              onClick={() => setImgSelect(1)}
            ></button>
            <button
              className='border border-white rounded-full h-3 w-3'
              style={imgSelect == 2 ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}
              onClick={() => setImgSelect(2)}
            >
            </button>
          </div>
          <div>
            <div className='bg-pink pb-2 flex gap-4'>
              <h1>Flights</h1>
              <h1>Flight + Hotel</h1>
              <h1>Holiday Packages</h1>
              <h1>Hotels</h1>
              <h1>Cars</h1>
            </div>
            <div>
     
            </div>
          </div>
        </div>
        <img src={imgs[imgSelect]} alt="" />
      </div>
    </div>
  )
}

export default Home
