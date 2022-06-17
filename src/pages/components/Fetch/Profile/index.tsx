import Image from 'next/image'
import React from 'react'

interface IProfileProps{
    name: string,
    imgUrl: string
}
export const Profile = ({imgUrl, name}: IProfileProps) => {
  return (
    <div>
        <Image layout='fill'  src={imgUrl} alt={name} />
        <strong>{name}</strong>
    </div>
  )
}
