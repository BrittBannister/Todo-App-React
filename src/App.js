import React, { Component } from "react";
import './index.css'
import todosList from "./todos.json";
import {v4 as uuidv4} from "uuid"
import TodoList from './TodoList'
import {Route, NavLink} from 'react-router-dom'
 

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

      <Route exact path = '/'
            render = {() => (
              <TodoList
                todos = {this.state.todos} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            )}
            />

        <Route path = './active'
              render = {() => (
                <TodoList
                todos = {this.state.todos.filter((todo) => todo.completed === false)} 
                handleDelete = {this.handleDelete}
                handleComplete = {this.handleComplete}
                clearComplete = {this.clearComplete}
              />
            )}
            />

          <Route path = './completed'
            render = {() => (
              <TodoList
              todos = {this.state.todos.filter((todo) => todo.completed === true)}
              handleDelete = {this.handleDelete}
              handleComplete = {this.handleComplete}
              clearComplete = {this.clearComplete}
            />
            )}
            />

<footer className="footer">
					<span className="todo-count">
						<strong>
            {(() => {
              let incompleted = this.state.todos.filter(
                todo => todo.completed !== true
              )
              return incompleted.length
            })()}
            {/* {this.state.todos.filter((todo) => todo.completed === false).length} */}
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
					<button className="clear-completed" onClick={this.clearComplete}>
						Clear completed
					</button>
				</footer>

</section>
    )
  }
}
export default App
//   render() {
//     return (
//       <section className="todoapp">
//         <header className="header">
//           <h1>todos</h1>
//           <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.addTodo} autoFocus />
//         </header>
//         <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
//         <footer className="footer">
//           <span className="todo-count">
//             <strong>0</strong> item(s) left
//           </span>
//           <button className="clear-completed" onClick={this.clearComplete}>
//             Clear completed
//           </button>
//         </footer>
//       </section>
//     )
//   }
// }

// class TodoItem extends Component {
//   render() {
//     return (
//       <li className={this.props.completed ? "completed" : ""}>
//         <div className="view">
//           <input className="toggle" type="checkbox" checked={this.props.completed} onChange={this.props.handleComplete}
//           />
//           <label>{this.props.title}</label>
//           <button className="destroy" onClick={this.props.handleDelete} />
//         </div>
//       </li>
//     )
//   }
// }

// class TodoList extends Component {
//   render() {
//     return (
//       <section className="main">
//         <ul className="todo-list">
//           {this.props.todos.map((todo) => (
//             <TodoItem key={todo.id}  
//               title={todo.title} completed={todo.completed} 
//               handleComplete={(evt) => this.props.handleComplete(todo.id)} 
//               handleDelete={(evt) => this.props.handleDelete(todo.id)}
//               />
//           ))}
//         </ul>
//       </section>
//     );
//   }
// }


// export default App

//! i tried to complete this using hooks but got super confused. So i stuck with the class components that were given to us. 

// function App(){
//   const [todos, setTodos] = useState(todosList)
//   const [completed, setCompleted] = useState(false) //TODO: Do i need even need this? I feel like todos is the only state...so confused...


//  const addTodo = (evt) => {
//   if (evt.key === 'Enter') {
//     const newToDo = {
//       userId: 1,
//       id: Math.floor(Math.random() * 1000),
//       title: evt.target.value,
//       completed: false,
//   }

//     const newToDos = todos.slice()
//     newToDos.push(newToDo)
//     console.log(newToDos)
//     setTodos(newToDos)
//     evt.target.value = ''
//   }
// }
// const handleComplete = (id) => {
//   let newToDos = todos.map((todo) => {
//     if (todo.id === id) {
//       return {
//         ...todo,
//         completed: !todo.completed,
//       }
//     }
//     return todo
//   })
//   todos(newToDos)
// }
  

// const clearComplete = () => {
//   let newToDos = todos.filter((todo) => todo.completed === false)
//   todos(newToDos)
// }

// const handleDelete = (todoId) => {
//   console.log(todoId)
//   let newToDos = todos.filter((todo) => todo.id !== todoId)
//   console.log(newToDos)
//   todos(newToDos)
// }


//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1>todos</h1>
//         <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus />
//       </header>
//       <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} />
//       <footer className="footer">
//         <span className="todo-count">
//           <strong>0</strong> item(s) left
//         </span>
//         <button className="clear-completed" onClick={clearComplete}>
//           Clear completed
//         </button>
//       </footer>
//     </section>
//   )
// }

//   function TodoItem()  {
//       return (
//         <li className={completed ? "completed" : ""}>
//           <div className="view">
//             <input className="toggle" type="checkbox" checked= {completed} onChange={handleComplete}
//             />
//             <label>{title}</label>
//             <button className="destroy" onClick={handleDelete} />
//           </div>
//         </li>
//       )
//     }
  
  
//   function TodoList() {
//       return (
//         <section className="main">
//           <ul className="todo-list">
//             {todos.map((todo) => (
//               <TodoItem key={todo.id}  
//                 title={todo.title} completed={todo.completed} 
//                 handleComplete={(evt) => handleComplete(todo.id)} 
//                 handleDelete={(evt) => handleDelete(todo.id)}
//                 />
//             ))}
//           </ul>
//         </section>
//       );
//     }
  

//   export default App