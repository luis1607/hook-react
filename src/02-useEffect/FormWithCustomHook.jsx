import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = ()=>{

    const { formState, onInputChange,username,email, password ,onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    //para aevitar esta linea podemos enviar los datos desde el hook esparcidos
    // const {username, email, password} = formState

    return (
        <>
        <h1>Formulario With CustomHook</h1>
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
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>

        </>
    )
}