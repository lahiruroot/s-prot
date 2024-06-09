import React from 'react'

function About() {
    return (
        // <div className='about pt-28' id='about'>
        //     <h1 className=' font-poppins  text-customColor text-4xl font-bold'>About</h1>
        //     <p className='italic font-poppins font-medium text-4xl text-customColor'>
        // <span className='font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>An IT professional,</span> inspiring to utilize own capabilities to fulfill the
        // organizational goals while enhancing personal competence.
        //     </p>
        // </div>

        <div className="text-center" id="about">
            <h1 className="text-4xl font-bold text-dark pb-8 pt-10">About</h1>
            <p className="italic font-poppins font-medium text-4xl text-customColor">
                <span className='font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>An IT professional,</span> inspiring to utilize own capabilities to fulfill the organizational goals while enhancing personal competence.
            </p>
        </div>
    )
}

export default About

