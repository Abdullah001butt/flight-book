import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
            </div>
            <div className='bg-primary flex justify-between py-4'>
                <div className="">
                    <Link to={'/'} className='text-5xl text-white font-semibold pl-28 py-4'>
                        AirAraiba
                    </Link>
                </div>
                <div className='flex gap-6 pr-28 self-center text-xl text-white'>
                    <Link to={'/plan'}>Plan</Link>
                    <div>Manage</div>
                    <div>Check-In</div>
                    <div>Destinations</div>
                    <div>Help</div>
                    <div>Air <span></span> Rewards</div>
                </div>
            </div>
        </div>
    )
}

export default Header