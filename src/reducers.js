import todosList from './todos.json'

import {
    TOGGLE_TODO,
    ADD_TODO,
    DELETE_TODO,
    CLEAR_COMPLETED_TODOS
} from './actions'

const initialState = {
    todos: todosList
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_TODO: {
        const newTodos = state.todos.map((todo) => {
          if (todo.id === action.payload)
          {todo.completed = !todo.completed}
          return todo
        })
        return { todos: newTodos }
      }

      case ADD_TODO: {
        const newTodos = state.todos.slice()
        newTodos.push(action.payload)
        console.log(newTodos)
        return { todos: newTodos }
      }

      case DELETE_TODO: {
      const newTodos = state.todos.filter(todo => todo.id !== action.payload);
      return { todos: newTodos };
    }

    
    case CLEAR_COMPLETED_TODOS: {
        const newTodos = state.todos.filter(todo => !todo.completed);
        return { todos: newTodos };
      }
      default:
        return state;
  
    }
  }
  
  export default reducer