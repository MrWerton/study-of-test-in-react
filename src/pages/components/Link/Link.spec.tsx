import {render, screen} from '@testing-library/react'
import { LinkComponent } from '.'

jest.mock('next/router', ()=>{
    return{
        useRouter(){
            return{
                asPath: '/'
            }
        }
    }
})
describe('link component', () => { 
    it('render correctly', ()=>{
        render(<LinkComponent title="aaa" href='/' />)
        expect(screen.getByText('aaa')).toBeInTheDocument()
    })
    it('to have class active', ()=>{
        render(<LinkComponent title="aaa" href='/' />)
        expect(screen.getByText('aaa')).toHaveClass('active')
    })
    it('not have class active', ()=>{
        render(<LinkComponent title="aaa" href='/fail' />)
        expect(screen.getByText('aaa')).not.toHaveClass('active')
    })
})