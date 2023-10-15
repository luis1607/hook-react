import { useState } from "react"

export const useCounter = ( initialValue = 10)=>{
    const [ counter, setCounter] = useState(initialValue)

    // en este caso para mostrar parametro por defecto pasa el evento y puede salir error
    const increment = (value = 2) =>{
        setCounter(counter + value)
    }
    // en este caso para mostrar parametro por defecto pasa el evento y puede salir error
    const decrement = (value = 2) =>{
        if(counter === 0) return;
        setCounter(counter - value)
    }

    const reset = ()=>{
        setCounter(initialValue)
    }
    
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}