import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = ()=>{

    const [formState,setFormState] = useState({
        username: 'gom',
        email: 'gom@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) =>{
        const { name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect(()=>{
    //     console.log('use Effect')
    // },[])

    // useEffect(()=>{
    //     console.log('use Effect formState')
    // },[formState])

    // useEffect(()=>{
    //     console.log('use Effect email')
    // },[email])

    return (
        <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="luisg@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
            (username === 'gom2') && <Message />
        }
        
        </>
    )
}