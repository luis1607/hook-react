import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils"

describe('Pruebas en useForm',()=>{
    const initialForm = {
        name : 'Luis',
        email : 'luis@gmail.com'
    }

    test('debe de regresar valores por defecto',()=>{
        const {  result } = renderHook(()=>useForm(initialForm))
        console.log(result.current)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test(' debe de cambiar el nombre del formulario',()=>{
        const target = {name: 'name', value: 'pedro'}
        const {  result } = renderHook(()=>useForm(initialForm))
        act(()=>{
            result.current.onInputChange({target})
        })

        expect(result.current.name).toBe('pedro')
        expect(result.current.formState.name).toBe('pedro')
    })

    test('debe realizar el reset de l formulario',()=>{
        const target = {name: 'name', value: 'pedro'}
        const {  result } = renderHook(()=>useForm(initialForm))
        act(()=>{
            result.current.onInputChange({target})
            result.current.onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })
})