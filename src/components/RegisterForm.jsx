import React, {useState} from 'react'

const RegisterForm = () => {
    const [currIndex, setCurrIndex] = useState(0);

    function plusIndex(n) {
        setCurrIndex(prev=>prev+n)
    }

    function handleNext(e) {
        e.preventDefault()
        plusIndex(1)
    }
    return (
        <div className='register'>
            <strong>Sign Up</strong>

        {/* Progress Bar */}
        <div className="progress-bar">
            <ul>
            <div className="progress" style={{width: `calc(100% /3 * ${currIndex})`}} />

            {
                ['Name', 'Contact', 'Birth', 'Submit'].map((item, index)=>(
                <li key={item} data-title={item} className={`${currIndex>=index ? 'active' : ''}`}>
                    {index+1}
                </li>
                ))
            }
            </ul>
        </div>

        {/* Pages */}
        <div className="wrapper" style={{marginLeft: `${currIndex * -100}%`}}>
            {/* Basic Info */}
        <form onSubmit={handleNext}>
            {/* First Name */}
            <label>First Name <span>*</span></label>
                <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" required/>
                </div>

            {/* Last Name */}
            <label>Last Name <span>*</span></label>
                <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" required/>
                </div>

            {/* Buttons */}
            <div className="btns">
                <button type="submit">Next</button>
            </div>
        </form> 

            {/* Contact Info */}
        <form onSubmit={handleNext}>
            {/* Email */}
            <label>Email <span>*</span></label>
                <div className="input-group">
                <i className="far fa-paper-plane"></i>
                <input type="email" required/>
                </div>

            {/* Phone Number */}
            <label>Phone Number <span>*</span></label>
                <div className="input-group">
                <i className="fas fa-phone"></i>
                <input type="number" required/>
                </div>

            {/* Buttons */}
            <div className="btns">
                <button type="button" onClick={()=>plusIndex(-1)}>Prev</button>
                <button type="submit">Next</button>
            </div>
        </form> 

         {/* Date of Birth */}
         <form onSubmit={handleNext}>
            {/* Date */}
            <label>Date <span>*</span></label>
                <div className="input-group">
                <i className="far fa-copy"></i>
                <input type="date" required/>
                </div>

            {/* Gender */}
            <label>Gender <span>*</span></label>
                <div className="input-group">
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>

            {/* Buttons */}
            <div className="btns">
                <button type="button" onClick={()=>plusIndex(-1)}>Prev</button>
                <button type="submit">Next</button>
            </div>
        </form> 

        {/* Submit */}
        <form onSubmit={handleNext}>
            {/* User Name */}
            <label>User Name <span>*</span></label>
                <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" required/>
                </div>

            {/* Password */}
            <label>Gender <span>*</span></label>
                <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" required/>
                </div>

            {/* Buttons */}
            <div className="btns">
                <button type="button" onClick={()=>plusIndex(-1)}>Prev</button>
                <button type="submit">Register</button>
            </div>
        </form> 
        </div>

       

        <div className="intro-text">
            <span>Welcome To This Site</span>
            <p>Registering for the site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier</p>
            
        </div>
        </div>
    );
};

export default RegisterForm;