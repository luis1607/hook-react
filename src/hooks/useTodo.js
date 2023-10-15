import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    // normalmente seria state y distpach pero cuando se tienen muchos hay que especificar nomrnes
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = (id) => {
        console.log(id)
        dispatchTodo({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        console.log(id)
        dispatchTodo({
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}