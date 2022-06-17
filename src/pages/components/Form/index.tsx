import React, { useState } from 'react'
import { Button } from '../Button'

interface ICounterProps{
    initialCounter: number,
}
export const Counter = ({initialCounter}:ICounterProps) => {
    const [counter, setCounter] = useState(initialCounter)
    const [active, setActive] = useState(false)

    const handleInclement = () => {
       setCounter(prevCounter=>prevCounter+1)
       setActive(true)
    }
    const handleDecrement = () => {
       setCounter(prevCounter=>prevCounter-1)
       setActive(true)
    }
    
    return (
        <div>
            <h1>the counter is {counter}</h1>
            <Button title='+' disabled={active} onClick={handleInclement}/>
            <Button title='-' disabled={active} onClick={handleDecrement}/>
        </div>
    )
}