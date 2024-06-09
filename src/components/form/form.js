import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [focusedInput, setFocusedInput] = useState('');
    const [selectedChip, setSelectedChip] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (name) => {
        setFocusedInput(name);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "formSubmissions"), {
                ...formData,
                selectedChip: selectedChip || "None",
                timestamp: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <section className="pt-24">
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <div className="w-full max-w-md p-4 md:p-8 mx-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col lg:flex-row">
                            <h2 className="mt-2 text-sm font-bold tracking-tight text-customColor py-4">I’m interested in...</h2>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 gap-1">
                                <div
                                    className={`relative grid items-center px-4 py-2 font-poppins text-xs text-white uppercase bg-customColor rounded-md select-none whitespace-nowrap w-25 ${selectedChip === "Ui/Ux" && "bg-gray-500"}`}
                                    onClick={() => handleClick("Ui/Ux")}
                                >
                                    <span className="text-center w-full">Ui/Ux</span>
                                </div>
                                <div
                                    className={`relative grid items-center px-4 py-2 font-poppins text-xs text-white uppercase bg-customColor rounded-md select-none whitespace-nowrap w-25 ${selectedChip === "Web design" && "bg-gray-500"}`}
                                    onClick={() => handleClick("Web design")}
                                >
                                    <span className="text-center w-full">Web design</span>
                                </div>
                                <div className={`relative grid items-center px-4 py-2 font-poppins text-xs text-white uppercase bg-customColor rounded-md select-none whitespace-nowrap w-20 ${selectedChip === "Graphic" && "bg-gray-500"}`}
                                    onClick={() => handleClick("Graphic")}
                                >
                                    <span className="text-left w-full">Graphic</span>
                                </div>
                                <div
                                    className={`relative grid items-center px-4 py-2 font-poppins text-xs text-white uppercase bg-customColor rounded-md select-none whitespace-nowrap w-25 ${selectedChip === "Design system" && "bg-gray-500"}`}
                                    onClick={() => handleClick("Design system")}
                                >
                                    <span className="text-center w-full">Design system</span>
                                </div>
                                <div
                                    className={`relative grid items-center px-4 py-2 font-poppins text-xs text-white uppercase bg-customColor rounded-md select-none whitespace-nowrap w-20 ${selectedChip === "Other" && "bg-gray-500"}`}
                                    onClick={() => handleClick("Other")}
                                >
                                    <span className="text-center w-full">Other</span>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xs mt-8">
                            <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                                <div className="flex flex-col relative">
                                    <label htmlFor="name" className={`text-sm font-medium absolute transition-all duration-300 ${focusedInput === 'name' || formData.name ? 'top-0 text-customColor -translate-y-3' : ''}`}>
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        className="border-b border-gray-300 rounded-t px-3 py-2 focus:outline-none focus:border-customColor"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col relative">
                                    <label htmlFor="email" className={`text-sm font-medium absolute transition-all duration-300 ${focusedInput === 'email' || formData.email ? 'top-0 text-customColor -translate-y-3' : ''}`}>
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        className="border-b border-gray-300 px-3 py-2 focus:outline-none focus:border-customColor"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 relative h-32">
                                    <label htmlFor="message" className={`text-sm font-medium absolute transition-all duration-300 ${focusedInput === 'message' || formData.message ? 'top-0 text-customColor -translate-y-3' : ''}`}>
                                        Your message
                                    </label>
                                    <input
                                        type="text"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        className="border-b border-gray-300 rounded-b px-3 py-2 focus:outline-none focus:border-customColor"
                                        required
                                    />
                                </div>
                                <div className=''>
                                    <button type="submit" className="bg-customColor text-white py-2 px-10 rounded flex items-center justify-center">
                                        <i className="fas fa-paper-plane mr-2"></i> {/* FontAwesome icon class */}
                                        Sendmessage
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;


import Image from 'next/image';

