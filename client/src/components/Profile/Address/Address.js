import React from 'react'

const Address = () => {
  return (
    <>
        <div className='profile--address'>
            <h5 className='profile--address--header'>
                Address book
            </h5>
            <div className='profile--address--wrapper'>
                <form className="address--form">
                    <div className="form-group">
                      <label htmlFor="gender">region</label><br/>
                        <select className='form-input' name="gander" id="gander">
                            <option hidden={true}>select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">City</label><br/>
                        <select className='form-input' name="gander" id="gander">
                            <option hidden={true}>select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Area</label><br/>
                        <select className='form-input' name="gander" id="gander">
                            <option hidden={true}>select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>                    
                    </div>
                    <div className="form-group">
                    <label htmlFor="gender">Address</label><br/>
                        <select className='form-input' name="gander" id="gander">
                            <option hidden={true}>select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>                    
                    </div>
                </form>
                <button type='submit' className='submit'>
                    Add
                </button>
            </div>
            
        </div>
    </>
  )
}

export default Address