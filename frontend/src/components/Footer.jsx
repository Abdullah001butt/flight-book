import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='flex bg-secondary gap-16 text-center pl-8 pt-16 pb-4 '>
      <div>
        <h1 className='text-xl pl-2'>Book your <br /> trip</h1>
        <ul className='text-primary font-medium mt-4'> 
          <li className='mt-2'>Book Flight</li>
          <li className='mt-2'>Best offers</li>
          <li className='mt-2'>Best hotel</li>
          <li className='mt-2'>Book car</li>
          <li className='mt-2'>Group Booking</li>
          <li className='mt-2'>Travelling from <br /> Dubai</li>
        </ul>
      </div>
      <div>
        <h1 className='text-xl pl-2'>Fly with <br />Us</h1>
        <ul className='text-primary font-medium mt-4'>
          <li className='mt-2'>Where we fly</li>
          <li className='mt-2'>Before you fly</li>
          <li className='mt-2'>Baggage</li>
          <li className='mt-2'>Cargo Service</li>
          <li className='mt-2'>At the airport</li>
          <li className='mt-2'>Onboard</li>
        </ul>
      </div>
      <div>
        <h1 className='text-xl pl-2'>About Us</h1>
        <ul className='text-primary font-medium mt-4'>
          <li className='mt-2'>Community</li>
          <li className='mt-2'>Careers</li>
          <li className='mt-2'>A320 cadet</li>
        </ul>
      </div>
      <div className='pl-2'>
        <h1 className='text-xl'>Customer Service</h1>
        <ul className='text-primary font-medium mt-4'>
          <li className='mt-2'>Contact Us</li>
          <li className='mt-2'>Call Centres</li>
          <li className='mt-2'>FAQ</li>
        </ul>
      </div>
      <div className='flex flex-col pl-16'>
        <h1 className='text-xl'>Social Media</h1>
        <ul className='mt-2 p-2'>
          <FacebookRoundedIcon className='text-blue-500'/>
          <InstagramIcon />
          <br />
          <LinkedInIcon className='text-blue-500'/>
          <XIcon />
        </ul>
      </div>
    </div>
  )
}

export default Footer
