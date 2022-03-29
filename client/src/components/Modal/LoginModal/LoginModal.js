import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { closeModal } from '../../../redux/Modal';

const LoginModal = () => {

    const navigate = useNavigate();
    const handleGoToSignUp = () => navigate('/sign-up');
    const dispatch = useDispatch();
    
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
                <span onClick={()=>{handleGoToSignUp();dispatch(closeModal())}} className="sign-up-text">Sign up</span>
            </div>
        </div>
    </>
  )
}

export default LoginModal