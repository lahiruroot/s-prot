import React from 'react'
import Image from "next/image";
import profile from '../../../public/profile.png'

function Hello() {
    return (
        <hero className="hello bg-white py-12 px-4 md:px-24 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:flex md:items-center md:justify-between">
                <div className="greeting mb-8 md:mb-0 md:w-1/2 md:mr-16">
                    <h1 className="font-poppins font-bold text-5xl text-customColor mb-4">Hi 👋,<br />My name is<br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text whitespace-nowrap">Movini Gamage</span><br />I build things for web
                    </h1>
                </div>
                <div className="profile--photo md:w-1/2">
                    <Image src={profile} className="mx-auto md:mx-0 w-72 rounded-full" alt="Profile" />
                </div>
            </div>
        </hero>
    )
}

export default Hello
