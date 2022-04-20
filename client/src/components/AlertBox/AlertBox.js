import React from 'react'
import ErrorIcon from '../IconComponents/errorIcon'
import SuccessIcon from '../IconComponents/successIcon'

const AlertBoxSuccess = ({alertBoxType, alertBoxMsg}) => {
  return (
    <div className={(alertBoxType === 'success') ? 'alertBox alertBox--success' : 'alertBox alertBox--error'}>
        {
            alertBoxType === 'success' ? <SuccessIcon/> : <ErrorIcon/>
        }
       <span>{alertBoxMsg}</span> 
    </div>
  )
}

export default AlertBoxSuccess