import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFecth } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />',()=>{
    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    })
    beforeEach(()=>{
        jest.clearAllMocks()
    })


    test('debe de mostrar el componente por defecto',()=>{

        useFecth.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading'))
        expect(screen.getByText('Breaking Bad Quotes'))

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy()
        // screen.debug()
    })

    test('debe de mostrar un qoute',()=>{

        useFecth.mockReturnValue({
            data: [{author:'luis', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Hola mundo')).toBeTruthy()
        expect(screen.getByText('luis')).toBeTruthy()
        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect(nextButton.disabled).toBeFalsy()
    })

    test('debe de llamar a la funcion de incrementar',()=>{

       
        useFecth.mockReturnValue({
            data: [{author:'luis', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        
        render(<MultipleCustomHooks/>)
        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()
    })
})