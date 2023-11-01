import * as React from 'react'
import {useState} from 'react'
const NavbarDesktop = (props) => {

    return (

    <>
       <div className='flex z-[-1] justify-between bg-white absolute inset-x-0 top-0 h-[77%]'>
            
            <div className='pt-24'>
                <div className='absolute flex xl:gap-12 xl:w-3/5 mx-auto inset-x-0'>
                    <div className='grid grid-cols-3 w-screen'>
                        <div className='flex xl:flex-col items-center'>
                            <img  src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="Model S" />
                            Model S<ul className='flex gap-3 text-sm underline'>
                                <li>cant</li>
                                <li>afford</li>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt="Model 3" />
                           Model 3<ul className='flex gap-3 text-sm underline'>
                                <li>Learn</li>
                                <li>Order</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="Model X" />
                            Model X<ul className='flex gap-3 text-sm underline'>
                                <li>Learn</li>
                                <li>Order</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="Model Y" />
                           Model Y <ul className='flex gap-3 text-sm underline'>
                                <li>Learn</li>
                                <li>Order</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/v1697244584/Mega-Menu-Vehicles-HMC-RedBlue.png" alt="Help me choose" />
                            Help Me Choose<ul className='flex gap-3 text-sm underline'>
                                <li>Learn</li>
                                <li>Order</li>
                            </ul>
                        </div>
                    </div>

                    <div className='vl'></div>

                    <div className=''>
                        <ul className='grid gap-3 text-sm pt-4'>
                            <li>Inventory</li>
                            <li>Used Cars</li>
                            <li>Demo Drive</li>
                            <li>Trade-in</li>
                            <li>Help Me Choose</li>
                            <li>Compare</li>
                            <li>Fleet</li>
                            <li>Cybertruck</li>
                            <li>Semi</li>
                            <li>Roadster</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    </>
    )
}

export default NavbarDesktop