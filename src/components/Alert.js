import React from "react"
import { useAppContext } from "../context/appContext"

const Alert = () => {
  let {alertText,alertType}=useAppContext()

  return(
         <div className={`alert alert-${alertType}`}>{alertText}</div>
      )

  
}

export default Alert
