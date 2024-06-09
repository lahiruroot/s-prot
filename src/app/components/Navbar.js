"use client"
import Image from "next/image";
import logo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'
import Hello from './Hello';
import { useState } from "react";
import LoginForm from "./login";

import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    // logoutfuntion

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (error) {
            console.error(error);
        }
    }
    // logoutfuntion
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Your login logic here, then set loggedIn to true upon successful login
        setLoggedIn(true);
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
                                <li><a href="#login" className="text-gray-600 hover:text-gray-800" onClick={openDialog}>Admin</a></li>
                                {loggedIn && (
                                    <nav className="bg-gray-100">
                                        <ul className="flex justify-end items-center">
                                            {/* Your other navigation links */}
                                            <li>
                                                <a href="#messages" className="text-gray-600 hover:text-gray-800">
                                                    Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={handleLogout} className="text-gray-600 hover:text-gray-800" >
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                )}                                <li><a href="#" className="text-gray-600 hover:text-gray-800" >Messages</a></li>
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
                                <li><a href="#login" className="block px-4 py-2 text-gray-600 hover:text-gray-800" onClick={openDialog}>Admin</a></li>
                                {loggedIn && (<li><a href="#login" className="block px-4 py-2 text-gray-600 hover:text-gray-800" >Messages</a></li>)}
                                <div className="grid gap-x-8 gap-y-4 grid-cols-3 pb-4">
                                    <div><li><Image href="https://github.com/movinigamage" src={gitlogo} alt="Button 1" className="w-6 h-6" /></li></div>
                                    <div><li><Image href="" src={twitlogo} alt="Button 2" className="w-6 h-6" /></li></div>
                                    <div><li><Image href="https://www.linkedin.com/in/movini/" src={linkedinlogo} alt="Button 3" className="w-6 h-6" /></li></div>
                                </div>
                            </ul>
                        </div>
                    )}
                </nav>

                {/* Dialog */}

                {showDialog && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                {/* Dialog content */}
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <LoginForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeDialog}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* dialog */}
            </header>
            <div className="relative isolate px-6 pt-28 lg:px-8">
                <Hello />
            </div>
        </div>
    )
}

export default Navbar
