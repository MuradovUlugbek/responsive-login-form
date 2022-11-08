import React from 'react'

const LoginForm = () => {
    return (
        <div className='login'>
            <strong>Sign In</strong>

        
        <form>
            {/* Email */}
            <label>Email <span>*</span></label>
                <div className="input-group">
                <i className="far fa-paper-plane"></i>
                <input type="email" required/>
                </div>

            {/* Password */}
            <label>Password <span>*</span></label>
                <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" required/>
                </div>

            {/* Buttons */}
            <div className="btns">
                <button type="submit">Login</button>
            </div>

            {/* Forget Pass */}
            <a href="#!" className="forget">Forget Your Password?</a>
        </form>

        <div className="intro-text">
            <span>Welcome To This Site</span>
            <p>Registering for the site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier</p>
            
        </div>
        </div>
    );
};

export default LoginForm;