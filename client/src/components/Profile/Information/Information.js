import React from 'react'

const Information = () => {
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
                                className='form-input' 
                                type="text" 
                                id="name" 
                                // onChange={(e)=>setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input 
                                className='form-input' 
                                type="email" 
                                id="email" 
                                // onChange={(e)=>setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label><br/>
                            <div className='form-input'>
                                <input   
                                    type="number" 
                                    id="mobile" 
                                    // onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='Add mobile number' 
                                />
                            </div>                    
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label><br/>
                            <div className='form-input'>
                                <input   
                                    type="date" 
                                    id="birthday" 
                                    // onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='Add birthday' 
                                />
                            </div>                    
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label><br/>
                            <select className='form-input' name="gander" id="gander">
                                <option hidden={true}>select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>                   
                        </div>
                    </div>
                </form>
                <button type='submit' className='submit'>
                    Edit
                </button>
            </div>
            
        </div>
    </>
  )
}

export default Information