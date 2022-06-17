import axios, { AxiosError } from "axios";
import * as React from "react";

const initialState = { error: null, data: null };
interface IuserProps{
  name: string,
  displayName: string
}
type initState ={
  data: IuserProps | null,
  error: string  | null,
}
type ACTIONTYPE =
    | { type: "SUCCESS"; data: IuserProps }
    | { type: "ERROR"; error: string};

function fetchReducer(state: initState, action: ACTIONTYPE):initState {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        data: action.data,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        data: null,
      }
    }
    default: {
      return state
    }
  }

}

export default function Fetch() {
  const [{error, data}, dispatch] = React.useReducer(
    fetchReducer,
    initialState,
  )
  const [isLoading, setIsLoading] = React.useState(true)

  const fetchGreeting = async () =>{
    try{
      const {data} =await axios.get('/users')
      dispatch({type: 'SUCCESS',data})
    }catch(err){
      const error = err as AxiosError
      dispatch({type: 'ERROR', error: error.message})
    }finally{
      setIsLoading(false)
    }

  }
  const cancelRequest = React.useRef<boolean>(false)

  React.useEffect(()=>{
    if(!cancelRequest.current){
      fetchGreeting()
    }
    

    return () => {
      cancelRequest.current = true
    }
   
    
  },[])
  if(isLoading) return <p>loading...</p>

  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}