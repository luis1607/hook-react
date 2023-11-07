import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en <LoginPage/>',()=>{
    test('debe de mostrar el component sin el usuario',()=>{
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        // screen.debug()
        const preTag = screen.getByLabelText('pree')

        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de llamar el setUser cuando se hace click en el boton',()=>{
        const setUserMock = jest.fn()
        render(
            <UserContext.Provider value={{user:null,setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button')
        // console.log(buttonElement)
        fireEvent.click(buttonElement)
        expect(setUserMock).toHaveBeenCalledWith({id: 123,name:'Luis',email:'luis@gmail.com'})
        
        // expect(preTag.innerHTML).toBe('null')
    })
})