// "use client";

// import React, { useState } from 'react';
// import { auth } from '../firebase-config';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const LoginForm = ({ onLoginSuccess }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginSuccess, setLoginSuccess] = useState(false);
//     const [loginError, setLoginError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             localStorage.setItem('token', user.accessToken);
//             localStorage.setItem('user', JSON.stringify(user));
//             setLoginSuccess(true);
//             setLoginError(null);
//             onLoginSuccess(); // Notify the parent component of successful login
//         } catch (error) {
//             console.error(error);
//             setLoginError(error.message);
//             setLoginSuccess(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Login Page</h1>
//             <form onSubmit={handleSubmit} className='login-form'>
//                 <input
//                     type="email"
//                     placeholder="Your Email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Your Password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit" className='login-button'>Login</button>
//             </form>
//             {loginError && <div className="text-red-500">Error: {loginError}</div>}
//             {loginSuccess && <div className="text-green-500">Login successful!</div>}
//         </div>
//     );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            toast.success('Login successful!', {
                position: "top-right" // Set position to top-right
            });
            onLoginSuccess(); // Notify the parent component of successful login
        } catch (error) {
            console.error(error);
            toast.error(`Error: ${error.message}`, {
                position: "top-right" // Set position to top-right
            });
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                    Login
                </button>
            </form>

            <ToastContainer position="top-right" /> {/* Set default position to top-right */}
        </div>
    );
};

export default LoginForm;
