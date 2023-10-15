import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = ()=>{

    const {counter,increment,decrement,reset} = useCounter();
    // const value2 = useCounter(20);
    // const {counter:counter2} = useCounter(20);
    
    return(
        <>
        <h1>Counter with Hook: {counter}</h1>

        {/* se tiene que usar asi para que no pase pro defecto event */}
        <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        {/* se tiene que usar asi para que no pase pro defecto event */}
        <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
        </>
    )
}