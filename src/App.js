import React, { Component } from "react";
import './index.css'
import todosList from "./todos.json";
import {v4 as uuidv4} from "uuid"
import TodoList from './components/todolist/TodoList'
import { Route, NavLink} from 'react-router-dom'
 
//! JONNY AND AMANDA HELPED ME FIGURE OUT MY ISSUES WITH MY ROUTE. 

//state todos is an array of objects.
class App extends Component {
  state = {
    todos: todosList,
  };
  
  
  addTodo = (evt) => {
    // const uuidv4 = require("uuid/v4")
    if (evt.key === 'Enter') {
      const newToDo = {
        userId: 1,
        id: uuidv4(),
        // id: Math.floor(Math.random() * 1000),
        title: evt.target.value,
        completed: false,
    }
      //created a copy
      const newToDos = this.state.todos.slice() 
      newToDos.push(newToDo) 
      console.log(newToDos)
      this.setState({ todos: newToDos }) //override orginial
      evt.target.value = ''
    }
  }


  handleComplete = (id) => {
    let newToDos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    this.setState({
      todos: newToDos
    })
  }


    //filter - only cares about getting true or false back
    //both these are doing the same thing basically...can i refactor these??
  clearComplete = (evt) => {
    let newToDos = this.state.todos.filter((todo) => todo.completed === false)
    this.setState({todos: newToDos})
  }

  handleDelete = (todoId) => {
    console.log(todoId)
    let newToDos = this.state.todos.filter((todo) => todo.id !== todoId)
    console.log(newToDos)
    this.setState({ todos: newToDos })
  }
  render() {
    return (
      <section className="todoapp">
         <header className="header">
           <h1>todos</h1>
           <input 
           className="new-todo" 
           placeholder="What needs to be done?" 
           onKeyDown={this.addTodo} 
           autoFocus />
       </header>

      <Route 
        exact path = '/'
            render = {() => 
              <TodoList
                todos = {this.state.todos} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            }
            />

        <Route path = '/active'
              render = {() => 
                <TodoList
                todos = {this.state.todos.filter(todo => todo.completed === false)} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            }
            />

        <Route path = '/completed'
              render = {() => 
                <TodoList
                todos = {this.state.todos.filter(todo => todo.completed === true)} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            }
            />
//! WHY DOEST THIS WORK WHEN ITS THE SAME AS ABOVE^^^ !@$(!@%*!@()%*)
{/* <Route path = '/completed'
              render = {() => 
                <TodoList
                todos = {this.state.todos.filter(todo => todo.completed === true)} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            }
            /> */}


<footer className="footer">
					<span className="todo-count">
						<strong>
            {this.state.todos.filter((todo) => todo.completed === false).length}
            </strong>{" "}
						item(s) left
					</span>
					<ul className="filters">
          {/* <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/active">Active</a>
            </li>
            <li>
              <a href="/completed">Completed</a>
            </li> */}

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
					<button className="clear-completed" onClick={this.clearComplete}>
						Clear completed
					</button>
				</footer>

</section>
    )
  }
}
export default App
