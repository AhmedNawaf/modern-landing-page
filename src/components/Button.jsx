import React from 'react'

const Button = ({ style, text }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg 
    text-primary outline-none rounded-lg ${style}`}>
      {text}
    </button>
  )
}

export default Button;