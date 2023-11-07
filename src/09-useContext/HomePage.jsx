import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () =>{

    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <h1>HomePage</h1>
            <hr />
            <pre aria-label="pre">
                {JSON.stringify(user,null,null)}
            </pre>
            <button 
            onClick={()=> setUser({id:123,name: 'Luis'})}
            className="btn btn-primary">
        Establecer usuario
            </button>
        </>
    )
}