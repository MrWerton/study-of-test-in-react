import {fireEvent, render, screen} from '@testing-library/react'
import { toast, ToastContainer } from 'react-toastify'
import { showToast } from './Toast'



describe('first', () => { 
    it('te', async()=>{
        render(
        <div>

        <button onClick={()=> showToast({message: 'test', type: 'error'})}>show</button>
        <ToastContainer/>
        </div>
        )
        fireEvent.click(screen.getByText('show'))

        screen.debug()
        screen.logTestingPlaygroundURL()
    

    })
 })