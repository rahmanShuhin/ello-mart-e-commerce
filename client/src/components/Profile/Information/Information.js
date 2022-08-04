import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { alertMessage, alertType } from '../../../redux/alertBox';
import { updateUser } from '../../../redux/Auth';

const Information = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [birthday,setBirthday] = useState('');
    const [gender,setGender] = useState('');
    const [isEditable, setIsEditable] = useState(false);
    
    const dispatch = useDispatch();
    const birthdayRef = useRef();

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setMobile(user.mobile);
        setBirthday(moment(user.birthday).format("DD-MM-YYYY"));//changing date format  
        setGender(user?.gender); 
    }, [user.birthday, user.email, user.gender, user.mobile, user.name])

    const handleEdit = () => {
        if(!user?.birthday){
            birthdayRef.current.value = '';
        }  
        setBirthday(moment(user.birthday).format("DD-MM-YYYY"));
        setIsEditable(!isEditable);
        
    };
   
    
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({name,email,mobile,birthday,gender})).then(
            (res) => {
                // if()
                dispatch(alertType('success'));
                dispatch(alertMessage(res.payload.data.status));
                localStorage.setItem('user',JSON.stringify(res.payload.data.user))
                setIsEditable(false);
                console.log(res);
            }
        ).catch(err => console.log(err))
    dispatch(alertType(''));
    }
    // const handleMobileInput = {

    // }
        
  return (
    <>
        <div className='profile--information'>
            <h5 className='profile--information--header'>
                My info
            </h5>
            <div className='profile--information--wrapper'>
                <form className="profile--form">
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Full name</label><br/>
                            <input 
                                className={isEditable ? 'form-input editable' : 'form-input'} 
                                type="text" 
                                id="name"
                                value={name} 
                                disabled={isEditable ? false : true}
                                onChange={(e)=>setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input 
                                className='form-input' 
                                type="email" 
                                id="email" 
                                value={email}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile (+880)</label><br/>
                            <div>
                                <input   
                                    className={isEditable ? 'form-input editable' : 'form-input'}
                                    type="number" 
                                    id="mobile"
                                    min="10"
                                    max="10" 
                                    disabled={isEditable ? false : true}
                                    value={mobile}
                                    onChange={(e)=>setMobile(e.target.value)}
                                    placeholder='Add mobile number'                          
                                />
                            </div> 
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label><br/> 
                            {
                                (isEditable) ?
                                <input  
                                    className='form-input editable' 
                                    type="date" 
                                    id="birthday"
                                    ref={birthdayRef} 
                                    value={birthday}
                                    min="1958-01-01" max="2012-12-31" 
                                    onChange={(e)=>setBirthday(e.target.value)} 
                                /> :
                                <input  
                                    className='form-input' 
                                    type="text"
                                    ref={birthdayRef}
                                    value={user.birthday && birthday} 
                                    disabled={true}
                                    placeholder='Add Birthday'
                                />

                            }         
                                 
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label><br/>
                            <select className={isEditable ? 'form-input editable' : 'form-input'} 
                                    name="gender" 
                                    disabled={isEditable ? false : true}
                                    value={gender}
                                    onChange={(e)=>setGender(e.target.value)}
                            >
                                <option hidden={true}>select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>                   
                        </div>
                    </div>
                </form>
                <div className="btn-wrapper">
                    {isEditable && 
                        <button onClick={handleUpdate} type="submit" className='submit'>
                        SAVE
                        </button>
                    }
                    <button onClick={handleEdit} className='submit'>
                        {isEditable ? "CANCEL" : "EDIT"}
                    </button>
                </div> 
            </div>
            
        </div>
    </>
  )
}

export default Information