import React, { useEffect, useRef, useState } from 'react';

const SignUp = ({ showSignUp }) => {
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (showSignUp) {
            firstInputRef.current.focus();
        }
    }, [showSignUp]);

    return (
        showSignUp ? (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <input
                        ref={firstInputRef}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        ) : null
    );
};

export default SignUp;
