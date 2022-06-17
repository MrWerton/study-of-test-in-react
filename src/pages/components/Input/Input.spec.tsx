import {fireEvent, render, screen} from '@testing-library/react'
import { Input } from '.'

describe('input is render', () => {
    it(' is render correctly', ()=>{
        render(<Input placeholder='digite...' name='test'/>)
        expect(screen.getByPlaceholderText(/digite.../i)).toBeInTheDocument()

    })
    it('label is render correctly', ()=>{
        render(<Input name='test'/>)
        expect(screen.getByLabelText(/test/i)).toBeInTheDocument()

    })
    it('input is change correctly', ()=>{
        render(<Input name='test'/>)
        const input = screen.getByRole('textbox',{
            name: /test/i
        }) as HTMLInputElement;

        fireEvent.change(input, {target: {value: '23'}})
        expect(input.value).toBe('23')
    })
})