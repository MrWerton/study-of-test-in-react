import { gql, useQuery } from '@apollo/client'
import React from 'react'

export const GET_DOG_QUERY = gql`
query GetDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }

`
export const ListDog = () => {
    const { loading, error, data } = useQuery(
        GET_DOG_QUERY,
        {variables: {
          name: 'Buck',
        }}
      
      
      );
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;
    
      return (
        <p>
          {data.dog.name} 
        </p>
      );
}
