import { useCounter, useFecth } from "../hooks"
import { LoadingQuote,Quote } from "./"


// import { useFecth } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const { data, isLoading, hasError } = useFecth(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    //!!si al data tiene un valor
    const {author,quote} = !!data && data[0]
    console.log({ data, isLoading, hasError })

    // if(isLoading){
    //     return (
    //         <h1>Cargando...</h1>
    //     )
    // }

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading
                    ? <LoadingQuote/>
                    : <Quote author={author} quote={quote}/>       
            }

            <button 
                className="btn btn-primary" 
                onClick={()=>increment(1)}
                disabled={isLoading}
            >
            Next quote
            </button>



        </>
    )
}