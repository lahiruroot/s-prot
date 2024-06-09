import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(null); // State for login error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            setLoginSuccess(true);
            setLoginError(null); // Reset login error if previous attempt failed
        } catch (error) {
            console.error(error);
            setLoginError(error.message); // Set login error message
            setLoginSuccess(false); // Reset login success state
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='login-button'>Login</button>
            </form>
            {loginError && <div className="text-red-500">Error: {loginError}</div>} {/* Display login error message */}
            {loginSuccess && <div className="text-green-500">Login successful!</div>}
        </div>
    );
};

export default LoginForm;
