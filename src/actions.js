import { v4 as uuidv4 } from "uuid"


export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS'


export const addTodo = (todoTitle) => {
    const newTodo = {
        userId: 1,
        id: uuidv4(),
        title: todoTitle,
        completed: false,
    }
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const toggleTodo  = (toggleId) => {
    return {
        type: TOGGLE_TODO,
        payload: toggleId
    }
}


export const deleteTodo = (deleteId) => {
    return {
        type: DELETE_TODO,
        payload: deleteId
    }
}

export const clearCompletedTodos = () => {
    return {
        type: CLEAR_COMPLETED_TODOS
    }
}