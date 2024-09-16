import React, { useRef, useEffect } from 'react';

const SignUp = () => {
    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current?.focus();
    }, []);

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <input ref={usernameRef} type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
