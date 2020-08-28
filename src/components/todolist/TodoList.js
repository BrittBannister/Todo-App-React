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
                title={todo.title} 
                completed={todo.completed} 
                handleToggleDelete={(evt) => this.props.deleteTodo(todo.id)}
                handleToggleTodo={(evt) => this.props.toggleTodo(todo.id)}
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


