// import {v4 as uuidv4} from "uuid"
import React, { Component } from "react";
import './index.css'
import todosList from "./todos.json";
import TodoList from './components/todolist/TodoList'
import { Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {addTodo, clearCompletedTodos} from './actions'

class App extends Component {
  state = {
    todos: todosList
  }

  handleAddTodo = (evt) => {
    if (evt.key === 'Enter') {
      this.props.addTodo(evt.target.value)
      evt.target.value = ''
    }
  }

  handleClearCompletedTodos= (evt) => {
    console.log('cleared out todo items')
    this.props.clearCompletedTodos()
  }

  render() {
    return (
      <section className="todoapp">
         <header className="header">
           <h1>todos</h1>
           <input 
           className="new-todo" 
           placeholder="What needs to be done?" 
           onKeyDown={this.handleAddTodo} 
           autoFocus />
       </header>

      <Route 
        exact path = '/'
            render = {() => 
              <TodoList
                todos = {this.props.todos} 
                // handleDelete = {this.handleDelete}
                // handleComplete = {this.handleComplete}
                // clearComplete = {this.clearComplete}
              />
            }
            />

        <Route path = '/active'
              render = {() => 
                <TodoList
                todos = {this.props.todos.filter(todo => todo.completed === false)} 
                // handleDelete = {this.handleDelete}
                // handleComplete = {this.handleComplete}
                // clearComplete = {this.clearComplete}
              />
            }
            />

        <Route path = '/completed'
              render = {() => 
                <TodoList
                todos = {this.props.todos.filter(todo => todo.completed === true)} 
                // handleDelete = {this.handleDelete}
                // handleComplete = {this.handleComplete}
                // clearComplete = {this.clearComplete}
              />
            }
            />


<footer className="footer">
					<span className="todo-count">
						<strong>
            {this.state.todos.filter((todo) => todo.completed === false).length}
            </strong>{" "}
						item(s) left
					</span>
					<ul className="filters">
						<li>
							<NavLink exact to="/" activeClassName="selected">
								All
							</NavLink>
						</li>
						<li>
							<NavLink to="/active" activeClassName="selected">
								Active
							</NavLink>
						</li>
						<li>
							<NavLink to="/completed" activeClassName="selected">
								Completed
							</NavLink>
						</li>
					</ul>
					<button className="clear-completed" onClick={this.handleClearCompletedTodos}>
						Clear completed
					</button>
				</footer>
</section>
    )
  }
}
export default App

