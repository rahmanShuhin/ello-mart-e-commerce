import React from 'react';

const Registration = () => {
  return (
    <>
        <div className="Registration--container">
            <div className="Registration--wrapper">
                <h5>Create an account</h5>
                <form className="Registration--form">
                <div className="form-group">
                        <label htmlFor="name">Full Name</label><br/>
                        <input className='form-input' type="email" id= "name" placeholder='Arif Mia' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br/>
                        <input className='form-input' type="email" id= "email" placeholder='example@email.com' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label><br/>
                        <input className='form-input' type="password" id="password" placeholder='************' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label><br/>
                        <input className='form-input' type="password" id="cpassword" placeholder='************' />
                    </div>
                    <button type='submit' className='submit'>Sign up</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration