import * as React from 'react'
import {useState} from 'react'
const VehiclesDropDown = (props) => {

    return (

    <>
       <div  id="vehicleDropdown" className=' hidden flex  z-[-1] justify-between bg-white absolute inset-x-0 top-0 h-screen md:h-[77%]'>
            
            <div className='pt-24'>
                <div className='absolute flex-col flex xl:gap-12 xl:w-3/5 mx-auto inset-x-0'>
                    <div className='grid pt-3 grid-cols-2 lg:grid-cols-3 w-screen'>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.tesla.com/models">
                                <img  src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="Model S" />
                            </a>
                            Model S<ul className='flex gap-3 text-sm underline underline-offset-4'>
                            <a href="https://www.tesla.com/models">
                                <li>Learn</li>
                            </a>
                            <a href='https://www.tesla.com/models/design#overview'>
                                <li>Order</li>
                            </a>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.tesla.com/model3"> 
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt="Model 3" />
                           </a>
                            Model 3<ul className='flex gap-3 text-sm underline underline-offset-2'>
                            <a href='https://www.tesla.com/model3'>
                                <li>Learn</li>
                            </a> 
                            <a href="https://www.tesla.com/model3/design#overview">
                                <li>Order</li>
                            </a>    
                            </ul>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.tesla.com/modelx">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="Model X" />
                           </a>
                            Model X<ul className='flex gap-3 text-sm underline underline-offset-2'>
                             <a href='https://www.tesla.com/modelx'>  
                                <li>Learn</li>
                            </a>  
                            <a href='https://www.tesla.com/modelx/design#overview'>
                                <li>Order</li>
                            </a>    
                            </ul>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.tesla.com/modely">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="Model Y" />
                            </a>
                           Model Y <ul className='flex gap-3 text-sm underline underline-offset-2 '>
                             <a href="https://www.tesla.com/modely">  
                                <li>Learn</li>
                            </a> 
                            <a href='https://www.tesla.com/modely/design#overview'>
                                <li>Order</li>
                            </a>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.tesla.com/choose">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/v1697244584/Mega-Menu-Vehicles-HMC-RedBlue.png" alt="Help me choose" />
                            </a>
                            Help Me Choose<ul className='flex gap-3 text-sm underline underline-offset-2'>
                            <a href='https://www.tesla.com/choose'>
                                <li>Get Started</li>
                            </a>                            </ul>
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

export default VehiclesDropDown