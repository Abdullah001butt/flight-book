import React from 'react'
import plane_img from '../assets/plane_img.jpg';

const Plan = () => {
    return (
        <div>
            <div className='justify-center items-center'>
                <img src={plane_img} alt="" className='absolute' />
                <div className='flex justify-center items-center pt-12'>
                    <div className='relative px-10 py-3'>
                        <div className='bg-opacity-80 text-4xl text-gray-700 font-semibold px-4 py-4 bg-white w-full h-full'>
                            Cheap Flights with Air Arabia From <span className='text-primary'>USD 112!</span>
                        </div>
                        <div className='bg-gray-200 px-4'>
                            <form>
                                <div className='flex gap-2'>
                                    <div className='bg-white hover:border-4 hover:border-primary absolute'>
                                        <select className='px-2 mr-2 outline-none py-2 text-gray-500'>
                                            <option value="">One-way</option>
                                            <option value="RoundTrip">Round-Trip</option>
                                        </select>
                                    </div>
                                    <div className='bg-white p-2 text-gray-500'>
                                        <button className='flex gap-2'>1 passenger <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        </span>
                                        </button>
                                    </div>
                                    <div className='bg-white p-2 text-gray-500'>
                                        <button className='flex'>Promo code <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        </span>
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-2 flex gap-4'>
                                    <div className='bg-white'>
                                        <h1 className='font-bold text-gray-700 pl-2'>From</h1>
                                        <input type="text" placeholder='Select origin' className='pl-2 outline-none'/>
                                    </div>
                                    <div className='bg-white '>
                                        <h1 className='font-bold text-gray-700 pl-2'>To</h1>
                                        <input type="text" placeholder='Select destination' className='pl-2 outline-none'/>
                                    </div>
                                    <div className='bg-white'>
                                        <button>
                                            <h1 className='font-bold text-gray-700'>Departure</h1>
                                            <input type="date" />
                                        </button>
                                    </div>
                                    <div className='bg-white'>
                                        <button>
                                            <h1 className='font-bold text-gray-700'>Return</h1>
                                            <input type="date" />
                                        </button>
                                    </div>
                                    <div className='bg-primary text-white px-6 flex items-center'>
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan