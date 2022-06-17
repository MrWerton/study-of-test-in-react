import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Button } from '../Button';
import { Input } from '../Input';

export const ADD_DOG_MUTATION = gql`
  mutation addDog($name: String!, $breed: String!) {
    addDog(name: $name, breed: $breed) {
      id
      name
      breed
    }
  }
`;
export function CreateDog() {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [createDog, { error}] = useMutation(ADD_DOG_MUTATION, {
    variables: {
      name: name,
      breed: breed,
    },
  });

  if(error) return <p>{error.message}</p>

  return (
    <form onSubmit={()=>createDog()} data-testid="form">
      <Input
      value={name}
      onChange={(e)=>setName(e.target.value)}
      name='name'
      />
      <Input
      value={breed}
      onChange={(e)=>setBreed(e.target.value)}
        name='breed'
      />
      <Button type='submit' title='Add dog' />
    </form>
  );
}