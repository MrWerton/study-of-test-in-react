import {render, screen, waitFor} from '@testing-library/react'
import { GET_DOG_QUERY, ListDog } from '.';
import {MockedProvider} from '@apollo/client/testing'
const mocks = [
    {
      request: {
        query: GET_DOG_QUERY,
        variables: {
          name: 'Buck',
        },
      },
      result: {
        data: {
          dog: { id: '1', name: 'Bidu', breed: 'bulldog' },
        },
      },
    },
  ];
  describe('<ListDog/>', ()=>{
    it('the query dog is sucess',async ()=>{
      render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListDog/>
      </MockedProvider>
      )

     expect(await screen.findByText('Bidu')).toBeInTheDocument()

    })
    it('loading is render correctly',async ()=>{
      render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListDog/>
      </MockedProvider>
      )

     expect(screen.getByText('Loading...')).toBeInTheDocument()

    })
    it('the query dog fail', async ()=>{
      const dogMock = {
        request: {
          query: GET_DOG_QUERY,
          variables: { name: 'Buck' },
        },
        error: new Error('test-fail'),
      };
      render(
      <MockedProvider mocks={[dogMock]} addTypename={false}>
        <ListDog/>
      </MockedProvider>
      )

     expect(await screen.findByText(/test-fail/i)).toBeInTheDocument()

      
    })




  })