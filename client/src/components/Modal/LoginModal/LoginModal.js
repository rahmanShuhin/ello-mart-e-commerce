import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { alertMessage, alertType } from '../../../redux/alertBox';
import { login } from '../../../redux/Auth';
import { closeModal } from '../../../redux/Modal';
import ClosedEyeIcon from '../../IconComponents/closeEyeIcon';
import EyeIcon from '../../IconComponents/eyeIcon';

const LoginModal = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToSignUp = () => navigate('/sign-up');

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMsg('')
        if(password.length > 5){
            dispatch(login({email,password})).then((res)=>{
                if(res.payload.status === 200){
                    dispatch(alertType('success'))
                    dispatch(alertMessage(res.payload.data.status))
                    document.getElementById("login-form").reset();
                    localStorage.setItem('user',JSON.stringify(res.payload.data.user))
                    setEmail('')
                    setPassword('')
                    setErrorMsg('')
                    dispatch(closeModal())
                    console.log(res)
                }
                else{
                    // setEmailErrorMsg('Email is already in use!')
                    setErrorMsg('Email or password does not match!')
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
        else if(password.length < 6){
            setErrorMsg('Minimum 6 characters required.')
        }
        else{
            setErrorMsg('email or password is not matching.')
        }
        dispatch(alertType(''));
    }
    
    
    
  return (
    <>
        <div className="login--wrapper">
            <h5>Login</h5>
            <form className="login--form" id="login-form" onSubmit={handleLogin}>
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
                        <div className='form-input'>
                            <input   
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder='********' 
                            />
                            <span onClick={()=>setShowPassword(!showPassword)} className="show-password-icon">
                                {showPassword ? <ClosedEyeIcon/> : <EyeIcon/>}
                            </span> 
                        </div>   
                        <span className='err-message'>{errorMsg}</span>                 
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