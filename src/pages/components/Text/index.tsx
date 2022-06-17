import React from 'react'

interface ITextProps{
    title: string
}
export const Text = ({title}: ITextProps) => {
  return (
    <h1>{title}</h1>
  )
}
