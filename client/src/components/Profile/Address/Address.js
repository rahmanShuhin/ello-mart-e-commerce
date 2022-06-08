import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CITY from '../../../assets/data/city';
import DISTRICTS from '../../../assets/data/district';
import DIVITIONS from '../../../assets/data/divisions';
import { alertMessage, alertType } from '../../../redux/alertBox';
import { addAddress } from '../../../redux/Auth';

const Address = () => {

    const [division, setDivision] = useState('');
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [regionId, setDivisionId] = useState('')
    const [cityId, setCityId] = useState('')

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('user'));

    
    const addAddressHandler = (e) => {
        e.preventDefault();
        dispatch(addAddress({_id : user._id,division,city,district,address})).then(
            (res)=>{
                console.log(res);
                localStorage.setItem('user',JSON.stringify(res.payload.data.user));
                dispatch(alertType('success'));
                dispatch(alertMessage(res.payload.data.message));
                setDivision(' ');
                setCity(' ');
                setDistrict(' ');
                setAddress(' ');
            }
        )
        dispatch(alertType(''));
    }

    //getting division id from DIVITIONS array 
    const handleDivisionId = (e) => {

        setDivision(e.target.value)
        const divisionIndex = DIVITIONS.find(division => division.name === e.target.value)
        setDivisionId(divisionIndex.id)
    }

     //getting city id from DISTRICTS array 
    const handleCityId = (e) => {

        setCity(e.target.value)
        const cityIndex = DISTRICTS.find( districts => districts.name === e.target.value)
        setCityId(cityIndex.id)
    }

    

  return (
    <>
        <div className='profile--address'>
            <h5 className='profile--address--header'>
                Address book
            </h5>
            <div className='profile--address--wrapper'>
                <div className="address--info">
                    <table className="address--table">
                        <thead>
                            <tr>
                                <th>Full name</th>
                                <th>Address</th>
                                <th>division</th>
                                <th>Phone</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.address.address}</td>
                                <td>
                                    {user.address.district}{' - '}
                                    {user.address.city}{' - '}
                                    {user.address.division} 
                                </td>
                                <td>0{user.mobile}</td>
                                <td>
                                    <button className="default-address">
                                        default shipping<br/> address
                                    </button>
                                </td>
                                <td>
                                    <button className='edit--address'>
                                        EDIT
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form className="address--form" id="address-form">
                    <div className="form-group">
                      <label htmlFor="division">Division</label><br/>
                        <select 
                            className='form-input' 
                            name="division" 
                            id="division"
                            value={division}
                            onChange={handleDivisionId}
                        >
                        <option disabled hidden={true}>select division</option>
                        {
                            DIVITIONS.map((division)=>(
                                <option key={division.id} value={division.name}>{division.name}</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label><br/>
                        <select 
                            className='form-input' 
                            name="city" 
                            id="city"
                            value={city}
                            onChange={(e) => handleCityId(e)}
                        >
                            <option hidden={true}>select city</option>
                            {
                                DISTRICTS.map((district)=>
                                (
                                    (district.division_id === regionId) 
                                    ?
                                     <option key={district.id} value={district.name}>{district.name}</option>    
                                    : null
                                )) 
                            } 
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="district">District</label><br/>
                        <select 
                            className='form-input' 
                            name="district" 
                            id="district"
                            value={district}
                            onChange={(e)=>setDistrict(e.target.value)}
                        >
                            <option hidden={true}>select district</option>
                            {
                                CITY.map((city)=>(
                                    (city.district_id === cityId)
                                    ?
                                    <option key={city.id} value={city.name}>{city.name}</option>
                                    :
                                    null
                                ))
                            }
                        </select>                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label><br/>
                            <textarea 
                                className='form-input text-area' 
                                name="address" 
                                id="address" 
                                placeholder='For Example: House# 123, Street# 123, ABC Road'
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            />                   
                    </div>
                </form>
                <button onClick={addAddressHandler} type='submit' className='submit'>
                    + ADD NEW ADDRESS
                </button>
            </div>
            
        </div>
    </>
  )
}

export default Address 