"use client"
import Image from "next/image";
import { React, useState } from 'react'
import send from '../../../public/send.png'
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
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
        <div>
            <div className='card-h1 font-poppins  text-customColor pt-28' id='contact'>
                <h1 className='text-4xl font-bold'>Contact</h1>
                <p className='text-3xl font-semibold pt-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>For more details contact me</p>
            </div>

            <div className='card font-poppins  text-customColor '>
                <div className="contact-card font-poppins text-customColor text-s font-medium">
                    <h2 className='font-poppins text-1xl font-bold'>I'm interested in...</h2>

                    <div className="button-group">
                        <div
                            className={`btn ${selectedChip === "Ui/Ux" && "selected"}`}
                            onClick={() => handleClick("Ui/Ux")}>
                            <span className=''>Ui/Ux</span>
                        </div>

                        <div
                            className={`btn ${selectedChip === "Web design" && "selected"}`}
                            onClick={() => handleClick("Web design")}>
                            <span className="">Web design</span>
                        </div>

                        <div className={`btn ${selectedChip === "Graphic" && "selected"}`}
                            onClick={() => handleClick("Graphic")}>
                            <span className="">Graphic</span>
                        </div>

                        <div
                            className={`btn ${selectedChip === "Design system" && "selected"}`}
                            onClick={() => handleClick("Design system")} >
                            <span className="">Design system</span>
                        </div>

                        <div
                            className={`btn ${selectedChip === "Other" && "selected"}`}
                            onClick={() => handleClick("Other")}>
                            <span className="">Other</span>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <input type="text" id="name" name="name" placeholder="Your name" required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={handleBlur}
                        />

                        <input type="email" id="email" name="email" placeholder="Your email" required 
                         value={formData.email}
                         onChange={handleChange}
                         onFocus={() => handleFocus('email')}
                         onBlur={handleBlur}

                        />

                        <textarea id="message" name="message" rows="4" placeholder="Your message" required
                        
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}

                        ></textarea>


                        <button type="submit" className="submit-btn">
                            <Image className="submit-btn-icon" src={send} alt="send"/>
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;

// function Contact() {

//     const [selectedChip, setSelectedChip] = useState(null);
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//     const handleClick = (chip) => {
//         setSelectedChip(chip);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Assuming 'messages' is your Firebase collection
//         db.collection('messages').add(formData)
//             .then(() => {
//                 console.log("Message sent successfully!");
//                 // Optionally, reset form data here
//                 setFormData({ name: '', email: '', message: '' });
//             })
//             .catch((error) => {
//                 console.error("Error sending message: ", error);
//             });
//     };

//     return (
//         <div>
//             <div className='card-h1 font-poppins  text-customColor pt-28' id='contact'>
//                 <h1 className='text-4xl font-bold'>Contact</h1>
//                 <p className='text-3xl font-semibold pt-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>For more details contact me</p>
//             </div>

//             <div className='card font-poppins  text-customColor '>
//                 <div className="contact-card font-poppins text-customColor text-s font-medium">
//                     <h2 className='font-poppins text-1xl font-bold'>I'm interested in...</h2>

//                     <div className="button-group">
//                         <div
//                             className={`btn ${selectedChip === "Ui/Ux" && "selected"}`}
//                             onClick={() => handleClick("Ui/Ux")}>
//                             <span className=''>Ui/Ux</span> </div>
//                         <div
//                             className={`btn ${selectedChip === "Web design" && "selected"}`}
//                             onClick={() => handleClick("Web design")}>
//                             <span className="">Web design</span>
//                         </div>
//                         <div className={`btn ${selectedChip === "Graphic" && "selected"}`}
//                             onClick={() => handleClick("Graphic")}>
//                             <span className="">Graphic</span>
//                         </div>
//                         <div
//                             className={`btn ${selectedChip === "Design system" && "selected"}`}
//                             onClick={() => handleClick("Design system")} >
//                             <span className="">Design system</span>
//                         </div>
//                         <div
//                             className={`btn ${selectedChip === "Other" && "selected"}`}
//                             onClick={() => handleClick("Other")}>
//                             <span className="">Other</span>
//                         </div>
//                     </div>
//                     <form className="contact-form" onSubmit={handleSubmit}>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
//                         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
//                         <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your message" required></textarea>
//                         <button type="submit" className="submit-btn">
//                             <img className="submit-btn-icon" src={send} alt="send"></img>
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }























