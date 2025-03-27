import React from 'react'
import './Button.css'

const Button = ({buttonText, onClick, customclass, prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customclass}`} onClick={onClick}>
    {prefix}{buttonText}
    </div>

  )
}

export default Button