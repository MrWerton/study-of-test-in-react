/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import { Profile } from "."

const mockData={
    name: 'werton',
    imgUrl: 'https://github.com/mrwerton.png' 
}
interface IImageMock{
    src: string,
    alt: string
}

jest.mock(
    'next/image',
    ()=> function Image({src, alt}: IImageMock){
        return <img src={src} alt={alt}/>
    }
)


describe('profile component', () => { 
    it('name is render correctly', ()=>{
        render(<Profile {...mockData}/> )
        screen.debug()
        expect(screen.getByText( /werton/i)).toBeInTheDocument()

    })
    it('img is render correctly', ()=>{
        render(<Profile {...mockData}/> )
        screen.debug()
        expect(screen.getByAltText( /werton/i)).toBeInTheDocument()
        expect(screen.getByAltText( /werton/i)).toHaveAttribute('src', 'https://github.com/mrwerton.png')
    })
 })