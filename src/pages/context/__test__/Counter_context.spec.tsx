import { act as actHook, renderHook } from '@testing-library/react-hooks'
import { CounterProvider, useCounter } from '../ContextCounter/Counter.context'


describe('Conter context', () => { 
    it('initial state is 0',  ()=>{
        const {result} = renderHook(()=>useCounter(), {
            wrapper: CounterProvider
        })
        const value = result.current.state
        expect(value.count).toBe(0)

    })
    it('increment correctly',  ()=>{
        const {result} = renderHook(()=>useCounter(), {
            wrapper: CounterProvider
        })
        const incrementButton =  result.current.dispatch({type: 'increment', payload: 3})
        actHook(()=>{
            incrementButton
        })
        const value = result.current.state
        expect(value.count).toBe(3)

    })
    it('declement correctly',  ()=>{
        const {result} = renderHook(()=>useCounter(), {
            wrapper: CounterProvider
        })
        const declementButton =  result.current.dispatch({type: 'decrement', payload: 3})
        actHook(()=>{
            declementButton
        })
        const value = result.current.state
        expect(value.count).toBe(-3)
    })
 })