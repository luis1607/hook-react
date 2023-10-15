import { useEffect, useState } from "react"

export const Message = ()=> {
    // console.log("hola")
    const [cords, setCords] = useState({X: 0,Y:0})
    useEffect(()=>{
        // console.log("Message Mounted")
        const onMouseMove = ({x,y})=>{
            setCords({x,y})
        }
        window.addEventListener('mousemove',onMouseMove)

        return ()=>{
            window.removeEventListener('mousemove',onMouseMove)
        }
    },[])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}