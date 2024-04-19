import React, { useState } from 'react'
import home_page_img_1 from "../assets/home_page_img_1.webp"
import home_page_img_2 from "../assets/home_page_img_2.webp"
import home_page_img_3 from "../assets/home_page_img_3.webp"
import card_1 from "../assets/card_1.webp"
import card_2 from "../assets/card_2.webp"
import card_3 from "../assets/card_3.webp"
import banner from "../assets/banner_img.jpg"
import baggage from "../assets/baggage_img.png"
import meal from "../assets/meal_img.png"
import card from "../assets/card_img.png"
import seat from "../assets/seat_img.png"


const Home = () => {
  const [imgSelect, setImgSelect] = useState(0);
  const imgs = [home_page_img_1, home_page_img_2, home_page_img_3];

  return (
    <div className='h-full'>
      <div className='relative flex justify-center mb-40'>
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
        <div className='absolute flex justify-center flex-col' style={{ top: "18rem" }}>
          {/* Image Slider */}
          <div className=' flex gap-1.5 justify-center mb-2'>
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
          {/* Flight Books */}
          <div>
            <div className='pb-2 flex text-white' style={{ backgroundColor: "#c20041" }}>
              <h1 className='px-16 py-2'>Flights</h1>
              <h1 className='bg-primary px-16 py-2'>Flight + Hotel</h1>
              <h1 className='bg-primary px-16 py-2'>Holiday Packages</h1>
              <h1 className='bg-primary px-16 py-2'>Hotels</h1>
              <h1 className='bg-primary px-16 py-2'>Cars</h1>
            </div>
            <div className='bg-gray-200 py-5 px-10 flex items-center justify-between'>
              <div className='flex gap-2'>
                <h1 className='text-gray-800 font-medium'>From</h1>
                <input className='outline-none w-52' type="text" placeholder='Sharjah (SHJ)' />
              </div>
              <div className='flex gap-2'>
                <h1 className='text-gray-800 font-medium'>To</h1>
                <input className='outline-none w-52' type="text" placeholder='Lahore (LHR)' />
              </div>
              <div className='flex gap-2'>
                <input type="radio" className='bg-black' name='one-way' />
                <h1>One Way</h1>
              </div>
              <div className='flex gap-2'>
                <input type="radio" className='bg-black' name='one-way' />
                <h1>Return</h1>
              </div>
              <div>
                <button className='bg-primary text-white py-2 px-2'>SEARCH & BOOK</button>
              </div>
            </div>
          </div>
        </div>
        <img src={imgs[imgSelect]} alt="" />
      </div>
      {/* Plan your next journey SECTION */}
      <div className='mx-28 my-20'>
        <div>
          <h1 className='text-3xl text-gray-800 font-light'>Plan your next journey</h1>
          <hr className='border-1 border-gray-800 w-80 my-4' />
        </div>
        <div className='flex gap-2'>
          <div>
            <img src={card_1} alt="" />
          </div>
          <div>
            <img src={card_2} alt="" />
          </div>
          <div>
            <img src={card_3} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='relative'>
          <div className='absolute'>
            <div className='flex flex-col pl-24 pt-10' style={{width: "40rem"}}>
              <h1 className='text-3xl text-gray-600 font-medium'>AirRewards – Loyalty Program</h1>
              <h2 className='text-sm text-gray-500 py-5'>
                Air Rewards, Air Arabia’s loyalty program, is the most generous loyalty program in the region. Based on a simple earn and redeem plan, Air Rewards offers you the maximum value for points earned. Join now and discover new possibilities with Air Rewards.
              </h2>
              <button className='bg-primary text-white py-2 px-2 w-32'>JOIN NOW</button>
            </div>
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
      <div>
        <div className='px-24 py-16 ' style={{backgroundColor: "#00d0d0"}}>
          <div className='text-4xl'>
            <div className='text-white'>Get more from our great flight options</div>
            <hr className='border-1 border-white my-4' style={{width: "43rem"}} />
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <div className='w-40 h-40'>
                <img className='object-contain ' src={baggage} alt="" />
              </div>
              <div>
                <h1 className='text-gray-600 font-medium  text-xl mb-2'>Pre-book your baggage</h1>
                <h2 className='text-gray-600 font-normal text-sm'>Pre-book your baggage allowance now and save up to 90% of baggage charges paid at the airport.</h2>
                <h3 className='text-white mt-2'>Find out more...</h3>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-40 h-40'>
                <img className='object-contain ' src={seat} alt="" />
              </div>
              <div>
                <h1 className='text-gray-600 font-medium text-xl mb-2'>Reserve your preferred seat!</h1>
                <h2 className='text-gray-600 font-normal text-sm'>What will it be, window or aisle? Select your preferred seat prior to your flight and guarantee that it is reserved for you.</h2>
                <h3 className='text-white mt-2'>Find out more...</h3>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-40 h-40'>
                <img className='object-contain ' src={card} alt="" />
              </div>
              <div>
                <h1 className='text-gray-600 font-medium text-xl mb-2'>Enjoy stress-free travel</h1>
                <h2 className='text-gray-600 font-normal text-sm'>Travel stress-free by getting covered for flight modification, cancellation, accident & medical treatments</h2>
                <h3 className='text-white mt-2'>Find out more...</h3>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-40 h-40'>
                <img className='object-contain' src={meal} alt="" />
              </div>
              <div>
                <h1 className='text-gray-600 font-medium text-xl mb-2'>Pre-select your preferred meal</h1>
                <h2 className='text-gray-600 font-normal text-sm'>Pre-order your preferred meal from our Sky Café menu and get served first onboard the flight.</h2>
                <h3 className='text-white  mt-2'>Find out more...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
