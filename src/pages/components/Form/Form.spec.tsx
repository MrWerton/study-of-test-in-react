import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Counter } from "."
describe('Counter page', ()=>{
  it('render initial value correctly', ()=>{
    render(<Counter initialCounter={0}/>)

    expect(screen.getByText(/0/i)).toBeInTheDocument()
  })
  it('increment counter it works correctly', async ()=>{
    render(<Counter initialCounter={0}/>)
    const button = screen.getByRole('button',{
        name: '+'
    })
    fireEvent.click(button)
    await waitFor(()=> screen.findByText(/1/))
    
  })
  it('decrement counter it works correctly', async ()=>{
    render(<Counter initialCounter={0}/>)
    const button = screen.getByRole('button',{
        name: '-'
    })
    fireEvent.click(button)
    await waitFor(()=> screen.findByText(/-1/))
    
  })
})