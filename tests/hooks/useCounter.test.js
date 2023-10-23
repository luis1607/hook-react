import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('Pruebas en el use Counter',()=>{
    test('debe de retornar los valores por defecto',()=>{
       const {result} = renderHook(()=>useCounter());
       const {counter, decrement, increment, reset} = result.current
       expect(counter).toBe(10);
       expect(decrement).toEqual(expect.any(Function));
       expect(increment).toEqual(expect.any(Function));
       expect(reset).toEqual(expect.any(Function));
    })

    test("debe de generar el counter con el valor de 100",()=>{
        const {result} = renderHook(()=>useCounter(100));
        const {counter, decrement, increment, reset} = result.current
        expect(counter).toBe(100);
    })

    test("debe de incrementar el contador",()=>{
        const {result} = renderHook(()=>useCounter(100));
        const {counter,  increment,} = result.current
        act(()=>{
            increment(5)
        })
        // increment(5)
        expect(result.current.counter).toBe(105);
    })
})