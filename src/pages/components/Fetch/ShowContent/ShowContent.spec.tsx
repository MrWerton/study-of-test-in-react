import {act, fireEvent, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import { ShowContent } from '.'

describe('ShowContent component', ()=>{
    it('h2 is show correctly',async ()=>{
        render(<ShowContent/>)
        expect(screen.getByRole('heading', {
            name: 'Hello'
        })).toBeInTheDocument()
            
            fireEvent.click(screen.getByRole('button', {
                name: 'show'
            }))
    
        const t = await screen.findByRole('heading', {
            name: 'Hello'
        })

        expect(t).toBeInTheDocument()

    })
})