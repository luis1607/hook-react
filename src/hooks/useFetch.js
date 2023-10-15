import { useEffect, useState } from "react"

export const useFecth = (url) => {

    const [state,setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    

    const getFetch = async ()=>{
        setState({...state,isLoading:true})

        //Si queremos trabajaar el error tenemos que meter esto en un try catch
        const resp = await fetch(url)
        const data = await resp.json()
        setState({data,isLoading:false,hasError:null})
        // console.log(data)
    }

    useEffect(() =>{
        getFetch()
    },[url])

    return {
        data: state.data,
        isLoading:state.isLoading,
        hasError: state.hasError
    }
}