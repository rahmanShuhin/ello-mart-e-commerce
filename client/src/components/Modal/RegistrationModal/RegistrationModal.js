import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../redux/Auth';
import AlertBoxSuccess from '../../AlertBox/AlertBox';

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState(''); 
    const [errorMsg, setErrorMsg] = useState('');
    const [alertBoxType, setAlertBoxType] = useState('')
    const [alertBoxMsg, setAlertBoxMsg] = useState('');

    const dispatch = useDispatch();

    const handleRegistration = (e) => {
        e.preventDefault();
        if((password === password2) && (password.length > 5)){
            dispatch(signupUser({name,email,password})).then((res)=>{
                if(res.payload.status === 201){
                    setAlertBoxType('success')
                    setAlertBoxMsg(res.payload.data.message);
                }
            }).catch((err)=>{
                console.log(err)
                setAlertBoxType('error')
                // setAlertBoxMsg(err.payload.data.message);
            })

        }
        else{
            setErrorMsg('Your Password is not Matching!')
        }    
    }

  return (
    <>
        
        <div className="Registration--container">
            {
                alertBoxType === 'success' && 
                <AlertBoxSuccess 
                    alertBoxType={alertBoxType} 
                    alertBoxMsg={alertBoxMsg} 
                />  
            } 
            <div className="Registration--wrapper">
                <h5>Create an account</h5>
                <form className="Registration--form" onSubmit={handleRegistration}>
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label><br/>
                        <input 
                            className='form-input' 
                            type="password" 
                            id="password" 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='************' 
                        /><br/>
                        <span className='err-message'>{errorMsg}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label><br/>
                        <input 
                            className='form-input' 
                            type="password" 
                            id="cpassword" 
                            onChange={(e)=>setPassword2(e.target.value)}
                            placeholder='************' 
                        /><br/>
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