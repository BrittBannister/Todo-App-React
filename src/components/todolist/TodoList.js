import React, {Component} from 'react'
import TodoItem from '../todoitem/TodoItem'

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map((todo) => (
              <TodoItem 
                key={todo.id}  
                title={todo.title} 
                completed={todo.completed} 
                handleComplete={() => this.props.handleComplete(todo.id)} 
                handleDelete={() => this.props.handleDelete(todo.id)}
                clearComplete = {() => this.props.clearComplete(todo.id)}
                />
            ))}
          </ul>
        </section>
      );
    }
  }

export default TodoList
