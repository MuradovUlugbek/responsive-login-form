import React from 'react';
import '../styles/Home.css'
import IMG from '../images/email.svg'

const Home = ({isAuth, setIsAuth}) => {
    return (
        <div id='Home'>
         <div className='container'>
            {/* Image */}
            <div className="container">
            <img src={IMG} alt="IMG" />
            </div>
            {/* Content */}
            <div className="img">
            <div className="text-btns">
            <p>Welcome to my channel, in this tutorial, I will show you. How to create a multi-step login form using ReactJS</p>

            <div className="btns">
                <a href="#!" className="login-btn" onClick={()=>setIsAuth({open: true, form: 'login'})}>Login</a>
                <a href="#!" className="register-btn"  onClick={()=>setIsAuth({open: true, form: 'register'})}>Register</a>
            </div>

                <span>Or Via Social Media</span>

                <div className="via-social">
                    <a href="#!">
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#!">
                    <i className="fa-brands fa-google"></i>
                    </a>

                    <a href="#!">
                    <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>

            </div>

            </div>
         </div>
        </div>
    );
};

export default Home;