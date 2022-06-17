import {render, screen} from '@testing-library/react'
import {Text} from '.'

describe('Text component', ()=>{
    it('is render title correctly', ()=>{
        render(<Text title='Hello' />);
        expect(screen.getByRole('heading',{
            name: /hello/i
        })).toBeInTheDocument();
        screen.debug
    })
})