import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { closeModal } from '../../../redux/Modal';

const LoginModal = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const goToSignUp = () => navigate('/sign-up');
    const dispatch = useDispatch();
    
    
    
  return (
    <>
        <div className="login--wrapper">
            <h5>Login</h5>
            <form className="login--form">
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input 
                        className='form-input' 
                        type="email" 
                        id="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='example@email.com' 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label><br/>
                    <input 
                        className='form-input' 
                        type="password" 
                        id="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='************' 
                    />
                </div>
                <button type='submit' className='submit'>Login</button>
            </form>
            <div className="need--account--text">Don't have account? {" "}
                <span onClick={()=>{goToSignUp();dispatch(closeModal())}} className="sign-up-text">Sign up</span>
            </div>
        </div>
    </>
  )
}

export default LoginModal