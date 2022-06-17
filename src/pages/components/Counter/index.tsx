import { useCounter } from "src/pages/context/ContextCounter/Counter.context"

export const Counter = () =>{
    const {dispatch, state} = useCounter()
        return(
          <div >
            <h1>{state.count}</h1>
            <button type='button' onClick={()=>dispatch({
              type: 'increment',
              payload: 2
            })}>+</button>
          </div>
        )
  
  }