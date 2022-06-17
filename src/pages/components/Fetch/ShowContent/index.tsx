import React, { useState } from 'react'

export const ShowContent = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        {show && <h2>Hello</h2>}
        <button onClick={()=>setShow(true)}>show</button>
    </div>
  )
}
