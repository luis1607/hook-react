import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />',()=>{

    const todo = {
        id:1,
        description: 'Piedra del Alma',
        done:false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> {
        //Esto es para que antes de que entre a cada test las funciones de arriba se reseteen
        jest.clearAllMocks()
    })

    test('debe de mostrar el Todo Pendiente completar',()=>{


        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        )

        const lifElement = screen.getByRole('listitem');
        console.log(lifElement.innerHTML)
        // this is for debugging
        // screen.debug()

        expect(lifElement.className).toBe('list-group-item d-flex justify-content-between')
            
        const spanElement  = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    })

    test('debe de mostrar el todo completado',()=>{

        todo.done = true

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        )

        const spanElement  = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).toContain('text-decoration-line-through')  
    })

    test('span debe de llenar el toggletodo cuando se hace click',()=>{
        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    test('button debe de llamar el deletetodo cuando se hace click',()=>{
        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const deleteButton = screen.getByRole('button')
        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    })
})