import React from 'react'
import { useSelector } from 'react-redux'
import ErrorIcon from '../IconComponents/errorIcon'
import SuccessIcon from '../IconComponents/successIcon'

const AlertBoxSuccess = () => {

  const alertBoxType = useSelector(state => state.alert.type)
  const alertBoxMsg = useSelector(state => state.alert.message)

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