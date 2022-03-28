import React from 'react';
import { useNavigate } from "react-router-dom";

const LoginModal = ({setOpenModal}) => {

    const navigate = useNavigate();
    const handleGoToSignUp = () => navigate('/sign-up');
    
  return (
    <>
        <div className="login--wrapper">
            <h5>Login</h5>
            <form className="login--form">
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input className='form-input' type="email" id="email" placeholder='example@email.com' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label><br/>
                    <input className='form-input' type="password" id="password" placeholder='************' />
                </div>
                <button type='submit' className='submit'>Login</button>
            </form>
            <div className="need--account--text">Don't have account? {" "}
                <span onClick={()=>{handleGoToSignUp();setOpenModal(false)}} className="sign-up-text">Sign up</span>
            </div>
        </div>
    </>
  )
}

export default LoginModal