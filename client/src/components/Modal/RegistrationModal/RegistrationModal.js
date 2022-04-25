import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { alertMessage, alertType } from '../../../redux/alertBox';
import { register } from '../../../redux/Auth';
import ClosedEyeIcon from '../../IconComponents/closeEyeIcon';
import EyeIcon from '../../IconComponents/eyeIcon';

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState(''); 
    const [errorMsg, setErrorMsg] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const handleRegistration = (e) => {
        e.preventDefault();
        if((password === password2) && (password.length > 5)){
            dispatch(register({name,email,password})).then((res)=>{
                if(res.payload.status === 200){
                    dispatch(alertType('success'))
                    dispatch(alertMessage(res.payload.data.status))
                    document.getElementById("reg-form").reset();
                    localStorage.setItem('user',JSON.stringify(res.payload.data.user))
                    setName('')
                    setEmail('')
                    setPassword('')
                    setPassword2('')
                    setErrorMsg('')
                    navigate('/')
                    console.log(res)
                }
                if(res.payload.status !== 200){
                    setEmailErrorMsg('Email is already in use!')
                    setErrorMsg('')
                }
            })
        }
        else if(password.length < 6){
            setErrorMsg('Minimum 6 characters required.')
        }
        else{
            setErrorMsg('Your Password is not Matching.')
        }
        dispatch(alertType(''));
    }

  return (
    <>
        
        <div className="Registration--container"> 
            <div className="Registration--wrapper">
                <h5>Create an account</h5>
                <form className="Registration--form" id="reg-form" onSubmit={handleRegistration}>
                <div className="form-group">
                        <label htmlFor="name">Full Name</label><br/>
                        <input 
                            className='form-input' 
                            type="text" 
                            id= "name" 
                            onChange={(e)=>setName(e.target.value)}
                            placeholder='Arif Mia' 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br/>
                        <input 
                            className='form-input' 
                            type="email" 
                            id= "email" 
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='example@email.com' 
                        />
                        <span className='err-message'>{emailErrorMsg}</span>
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
                    <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label><br/>
                        <div className='form-input'>
                            <input 
                                type={showPassword2 ? "text" : "password"} 
                                id="cpassword" 
                                onChange={(e)=>setPassword2(e.target.value)}
                                placeholder='********' 
                            />
                            <span onClick={()=>setShowPassword2(!showPassword2)} className="show-password-icon">
                                {showPassword2 ? <ClosedEyeIcon/> : <EyeIcon/>}
                            </span>
                        </div>
                        <span className='err-message'>{errorMsg}</span>
                    </div>
                   
                    <button type='submit' className='submit'>Sign up</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration