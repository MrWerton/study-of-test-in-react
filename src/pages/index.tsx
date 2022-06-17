

import styles from '@/pages/index.module.css'

import { ApolloClient, InMemoryCache , ApolloProvider} from '@apollo/client'
import { Counter } from './components/Counter'
import { CounterProvider, useCounter } from './context/ContextCounter/Counter.context'


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
})


export default function Home() {
 

  return (
      <ApolloProvider client={client}>
        <CounterProvider>
          <Counter/>
        </CounterProvider>
      </ApolloProvider>
  )
}
