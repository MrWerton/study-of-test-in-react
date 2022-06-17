import React, { InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
}
export const Input = ({name, ...rest}:IInputProps) => {
  return (
    <label htmlFor={name}>
        {name}
        <input name={name} {...rest} id={name}/>
    </label>
  )
}
