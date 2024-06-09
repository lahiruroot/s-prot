"use client";

import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore'; // I
import Image from "next/image";
import logo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'
import Hello from './Hello';
import LoginForm from "./login";
import Messages from './messages';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setLoggedIn(false);
        } catch (error) {
            console.error(error);
        }
    };

    //messagedialog
    const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false); // State to manage dialog visibility
    const handleMessagesClick = () => {
        // Open dialog box when Messages link is clicked
        setIsMessageDialogOpen(true);
    };


    //messagedialog

    // messagecount
    const [documentCount, setDocumentCount] = useState(0);

    useEffect(() => {
        const fetchDocumentCount = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
                const count = querySnapshot.size;
                setDocumentCount(count);
            } catch (error) {
                console.error('Error fetching document count:', error);
            }
        };

        fetchDocumentCount();

        return () => {
            // Cleanup function
        };
    }, []);



    // messagecount
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="bg-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={logo} className="h-5 w-auto" alt="Logo" />
                        </a>
                        <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gradient-to-r from-purple-400 to-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-white" aria-controls="navbar-default" aria-expanded={mobileMenuOpen ? 'true' : 'false'}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                            <ul className="flex space-x-6">
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                                <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
                                <li><a href="#tech" className="text-gray-600 hover:text-gray-800">Tech Stack</a></li>
                                <li><a href="#project" className="text-gray-600 hover:text-gray-800">Projects</a></li>
                                <li><a href="#education" className="text-gray-600 hover:text-gray-800">Education</a></li>
                                <li><a href="#qualification" className="text-gray-600 hover:text-gray-800">Qualification</a></li>
                                <li><a href="#experience" className="text-gray-600 hover:text-gray-800">Experience</a></li>
                                <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                                {!loggedIn && <li><a href="#login" className="text-gray-600 hover:text-gray-800" onClick={openDialog}>Login</a></li>}
                                {loggedIn && (
                                    <>
                                        <li><a href="#messages" className="text-gray-600 hover:text-gray-800" onClick={handleMessagesClick}>Messages
                                            <span class="relative inline-flex text-xs bg-red-500 text-white rounded-full py-1 px-2">
                                                {documentCount.toString()}
                                            </span>
                                        </a></li>
                                        <li><a href="#" onClick={handleLogout} className="text-gray-600 hover:text-gray-800">Logout</a></li>
                                    </>
                                )}
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
                                {!loggedIn && <li><a href="#login" className="block px-4 py-2 text-gray-600 hover:text-gray-800" onClick={openDialog}>Login</a></li>}
                                {loggedIn && <li><a href="#messages" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Messages</a></li>}
                                {loggedIn && <li><a href="#" onClick={handleLogout} className="block px-4 py-2 text-gray-600 hover:text-gray-800">Logout</a></li>}
                                <div className="grid gap-x-8 gap-y-4 grid-cols-3 pb-4">
                                    <div><Image href="https://github.com/movinigamage" src={gitlogo} alt="Button 1" className="w-6 h-6" /></div>
                                    <div><Image href="" src={twitlogo} alt="Button 2" className="w-6 h-6" /></div>
                                    <div><Image href="https://www.linkedin.com/in/movini/" src={linkedinlogo} alt="Button 3" className="w-6 h-6" /></div>
                                </div>
                            </ul>
                        </div>
                    )}
                </nav>
                {showDialog && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <LoginForm onLoginSuccess={() => { setLoggedIn(true); closeDialog(); }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Dialog box */}
                {isMessageDialogOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            {/* <LoginForm onLoginSuccess={() => { setLoggedIn(true); closeDialog(); }} /> */}
                                            <Messages />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
            <div className="relative isolate px-6 pt-28 lg:px-8">
                <Hello />
            </div>
        </div>
    );
}

export default Navbar;

