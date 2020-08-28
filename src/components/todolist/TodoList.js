import React, {Component} from 'react'
import TodoItem from '../todoitem/TodoItem'
import {connect} from 'react-redux'
import {deleteTodo, toggleTodo} from '../../actions'

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map((todo) => (
              <TodoItem 
                key = {todo.id}
                title={todo.title} 
                completed={todo.completed} 
                handleDelete={(evt) => this.props.deleteTodo(todo.id)}
                handleToggle={(evt) => this.props.toggleTodo(todo.id)}
                />
            ))}
          </ul>
        </section>
      );
    }
  }

  const mapDispatchToProps ={
    deleteTodo,
    toggleTodo
   }
   
   export default connect(null, mapDispatchToProps)(TodoList)


