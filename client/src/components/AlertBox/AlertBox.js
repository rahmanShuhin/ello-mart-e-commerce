import React from 'react'
import { useSelector } from 'react-redux'
import ErrorIcon from '../IconComponents/errorIcon'
import SuccessIcon from '../IconComponents/successIcon'

const AlertBox = () => {

  const alertBoxType = useSelector(state => state.alert.type) || "";
  const alertBoxMsg = useSelector(state => state.alert.message) || "successful";

  return (
    <>
      {
        (alertBoxType === 'success') && 
        <div className='alertBox alertBox--success'>
            <SuccessIcon/>
            <span>{alertBoxMsg}</span> 
        </div>
      }
      {
        (alertBoxType === 'error') && 
        <div className='alertBox alertBox--error'>
            <ErrorIcon/>
            <span>{alertBoxMsg}</span> 
        </div>
      }
    </>
    
  )
}

export default AlertBox