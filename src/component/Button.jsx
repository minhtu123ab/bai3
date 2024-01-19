import React from 'react'

const Button = ({text,padding,...reat}) => {
  return (
    <button style={{
        padding,
        ...reat,
    }}>{text}</button>
  )
}

export default Button