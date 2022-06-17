import { gql } from "@apollo/client";
import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { reducer } from "./reducer.counter";
import { initialState } from "./State";
import { ACTIONTYPE, InitialStateType } from "./types";

interface IContextProps{
   state: InitialStateType,
   dispatch: Dispatch<ACTIONTYPE>
}
interface ICounterProvider{
    children: ReactNode
}


const CounterContext = createContext<IContextProps>({} as IContextProps)


export const CounterProvider=({children}: ICounterProvider)=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <CounterContext.Provider 
        value={{
            dispatch,
            state
        }}>
            {children}
        </CounterContext.Provider>
    )

}

export const useCounter = () =>{
    return useContext(CounterContext)
}