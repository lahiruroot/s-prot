"use client"
import Image from "next/image";
import logo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'
import Hello from './Hello';
import { useState } from "react";

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav class="bg-white">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={logo} className="h-5 w-auto" />
                        </a>
                        <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gradient-to-r from-purple-400 to-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-white" aria-controls="navbar-default" aria-expanded={mobileMenuOpen ? 'true' : 'false'}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
                            <ul class="flex space-x-6">
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
                                <li><a href="#about" class="text-gray-600 hover:text-gray-800">About</a></li>
                                <li><a href="#tech" class="text-gray-600 hover:text-gray-800">Tech Stack</a></li>
                                <li><a href="#project" class="text-gray-600 hover:text-gray-800">Projects</a></li>
                                <li><a href="#education" class="text-gray-600 hover:text-gray-800">Education</a></li>
                                <li><a href="#qualification" class="text-gray-600 hover:text-gray-800">Qualification</a></li>
                                <li><a href="#experience" class="text-gray-600 hover:text-gray-800">Experience</a></li>
                                <li><a href="#contact" class="text-gray-600 hover:text-gray-800">Contact</a></li>
                                <li><Image src={gitlogo} alt="Button 1" className="w-6 h-6" /></li>
                                <li><Image src={twitlogo} alt="Button 2" className="w-6 h-6" /></li>
                                <li><Image src={linkedinlogo} alt="Button 3" className="w-6 h-6" /></li>
                            </ul>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="md:hidden">
                            <ul className="flex flex-col space-y-4 py-2 items-center justify-center shadow-md rounded-lg">
                                <li><a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Home</a></li>
                                <li><a href="#about" className="block px-4 py-2 text-gray-600 hover:text-gray-800">About</a></li>
                                <li><a href="#tech" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Tech Stack</a></li>
                                <li><a href="#project" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Projects</a></li>
                                <li><a href="#education" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Education</a></li>
                                <li><a href="#qualification" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Qualification</a></li>
                                <li><a href="#experience" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Experience</a></li>
                                <li><a href="#contact" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Contact</a></li>
                                <div className="grid gap-x-8 gap-y-4 grid-cols-3 pb-4">
                                    <div><li><Image href="https://github.com/movinigamage" src={gitlogo} alt="Button 1" className="w-6 h-6" /></li></div>
                                    <div><li><Image href="" src={twitlogo} alt="Button 2" className="w-6 h-6" /></li></div>
                                    <div><li><Image href="https://www.linkedin.com/in/movini/" src={linkedinlogo} alt="Button 3" className="w-6 h-6" /></li></div>
                                </div>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
            <div className="relative isolate px-6 pt-28 lg:px-8">
                <Hello />
            </div>
        </div>
    )
}

export default Navbar
