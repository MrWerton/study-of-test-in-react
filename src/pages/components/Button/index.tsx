import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
}
export const Button = ({title, ...rest}: IButtonProps) => {
  return (
          <button {...rest}>{title}</button>
  )
}
