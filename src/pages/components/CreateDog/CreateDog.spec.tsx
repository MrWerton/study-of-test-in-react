import {fireEvent, getByRole, getByText, render, screen, waitFor} from '@testing-library/react'
import {CreateDog, ADD_DOG_MUTATION } from '.';
import {MockedProvider} from '@apollo/client/testing'
const mocks = [
  {
    request: {
      query: ADD_DOG_MUTATION,
      variables: {
        name: 'Bidu',
        breed: 'Bulldog',
      },
    },
    newData: jest.fn(() => ({
      data: {
        addDog: {
          id: '4',
          name: 'Bolota',
          breed: 'Caramelo',
        },
      },
    })),
  },
]
  describe('<CreateBook/>', ()=>{
    it('dog is created correctly',async ()=>{
      render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreateDog/>
      </MockedProvider>
      )
      const inputName = screen.getByRole('textbox',{
        name: /name/i
      }) as HTMLInputElement;
      const inputBreed = screen.getByRole('textbox',{
        name: /breed/i
      }) as HTMLInputElement;

      fireEvent.change(inputName, {target: {value: 'Bidu'}})
      fireEvent.change(inputBreed, {target: {value: 'Bulldog'}})

      const formDog =await screen.findByTestId('form');
      
      fireEvent.submit(formDog);
      const addBookMutationMock = mocks[0].newData;
      await waitFor(() => expect(addBookMutationMock).toHaveBeenCalled());
    })
    it('dog created failed',async ()=>{
      const dogMock = {
        request: {
          query: ADD_DOG_MUTATION,
          variables: {
            name: 'Bidu',
            breed: 'Bulldog',
          },
        },
        error: new Error('created fail'),
      };
      render(
        <MockedProvider mocks={[dogMock]} addTypename={false}>
          <CreateDog/>
        </MockedProvider>
        )
        const inputName = screen.getByRole('textbox',{
          name: /name/i
        }) as HTMLInputElement;
        const inputBreed = screen.getByRole('textbox',{
          name: /breed/i
        }) as HTMLInputElement;
  
        fireEvent.change(inputName, {target: {value: 'Bidu'}})
        fireEvent.change(inputBreed, {target: {value: 'Bulldog'}})
  
        const formDog =await screen.findByTestId('form');
        
        fireEvent.submit(formDog);
        await screen.findByText('created fail')
        screen.debug

    }) 
  })