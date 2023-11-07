import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () =>{

    const {user, setUser} = useContext(UserContext)
   

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre aria-label="pree">
                {JSON.stringify(user,null,null)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick={()=>setUser({id: 123,name:'Luis',email:'luis@gmail.com'})}
            > 

            </button>
        </>
    )
}