import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('button ', ()=>{
    it('is render correctly', ()=>{
        render(<Button title="Test"/>)

        expect(screen.getByRole('button',{
            name: 'Test'
        })).toBeInTheDocument()
    })
    it('is clicked correctly', ()=>{
        const handleClick = jest.fn()
        render(<Button onClick={handleClick} title="Test"/>)

        fireEvent.click(screen.getByRole('button',{
            name: 'Test'
        }))
        expect(handleClick).toBeCalled()
    })
})