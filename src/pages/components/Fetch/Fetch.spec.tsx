/* eslint-disable testing-library/no-unnecessary-act */

import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, waitFor, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import Fetch from '.'

const server = setupServer(
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json( {name: 'test'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('fetch component', ()=>{
  it('loads and displays name', async () => {
   render(<Fetch/>)
  
    await screen.findByRole('heading')
    
    expect(screen.getByRole('heading')).toHaveTextContent(/test/i)
  })
  
  it('handles server error', async () => {
    server.use(
      rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Fetch />) 
    await screen.findByRole('alert')
  
    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  })

  it('loading is show correctly', async()=>{
     act( ()=>{
      render(<Fetch/>)
    })
    await waitFor(()=>{
      expect(screen.getByText('loading...')).toBeInTheDocument()
    })
  })
})