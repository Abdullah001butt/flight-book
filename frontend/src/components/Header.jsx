import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
            </div>
            <div className='bg-primary flex justify-between'>
                <div className="">
                    <div className='text-5xl text-white font-semibold pl-28 py-4'>
                        AirAraiba
                    </div>
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