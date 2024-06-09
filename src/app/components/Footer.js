import React from 'react'
import Image from "next/image";

import movinilogo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'

function Footer() {
    return (

        // <div className='footer--main'>
        //     <div className='footer'>
        //         <div><Image className='footer--logo' src={movinilogo}/></div>

        //         <div className='footer--menu'>
        //             <div className='footer--contact'>
        //                 <ul className='font-poppins text-customColor text-lg font-medium'>
        //                     <li><a href=''>mwmgamage@gmail.com</a></li>
        //                     <li>+94 768886618</li>
        //                 </ul>
        //             </div>

        //             <div className='footer--icon'>
        //                 <ul>
        //                     <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon' /></a></li>
        //                     <li><Image src={twitlogo} className='navbar-icon' /></li>
        //                     <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon' /></a></li>
        //                 </ul>
        //             </div>

        //         </div>
        //     </div>


        //     <div className='sub--footer'>
        //         <ul className='font-poppins text-customColor text-lg font-medium'>
        //             <li><a href=''>Home</a></li>
        //             <li><a href='#about'>About</a></li>
        //             <li><a href='#tech'>Tech Stack</a></li>
        //             <li><a href='#project'>Projects</a></li>
        //             <li><a href='#education'>Education</a></li>
        //             <li><a href='#qualification'>Qualification</a></li>
        //             <li><a href='#contact'>Contact</a></li>
        //         </ul>
        //         <div>
        //             Designed and built by Movini .
        //         </div >

        //     </div>


        // </div>
        <div className='footer--main'>
            <div className='footer flex flex-col items-center lg:flex-row lg:items-start'>
                <div className='mb-8 lg:mb-0 lg:mr-8'>
                    <Image className='footer--logo' src={movinilogo} />
                </div>

                <div className='footer--menu flex flex-col lg:flex-row lg:gap-8'>
                    <div className='mb-4 lg:mb-0'>
                        <ul className='font-poppins text-customColor text-lg font-medium'>
                            <li><a href=''>mwmgamage@gmail.com</a></li>
                            <li>+94 768886618</li>
                        </ul>
                    </div>

                    <div className='footer--icon flex gap-4'>
                        <ul>
                            <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon' /></a></li>
                            <li><Image src={twitlogo} className='navbar-icon' /></li>
                            <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sub--footer text-center lg:text-left'>
                <ul className='font-poppins text-customColor text-lg font-medium flex flex-wrap gap-4'>
                    <li><a href=''>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#tech'>Tech Stack</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#qualification'>Qualification</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className="mt-4">
                    Designed and built by Movini.
                </div>
            </div>
        </div>


    )
}

export default Footer
