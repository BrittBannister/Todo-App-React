import React, {Component} from 'react'
import TodoItem from './TodoItem'

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
                handleComplete={(evt) => this.props.handleComplete(todo.id)} 
                handleDelete={(evt) => this.props.handleDelete(todo.id)}
                />
            ))}
          </ul>
        </section>
      );
    }
  }

export default TodoList
