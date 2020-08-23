import React, { Component } from "react";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
  };

  addTodo = (evt) => {
    if (evt.key === 'Enter') {
      const newToDo = {
        userId: 1,
        id: Math.floor(Math.random() * 1000),
        title: evt.target.value,
        completed: false,
    }

      const newToDos = this.state.todos.slice()
      newToDos.push(newToDo)
      console.log(newToDos)
      this.setState({ todos: newToDos })
      evt.target.value = ''
    }
  }

  handleComplete = (evt, id) => {
    let newToDos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    this.setState({
      todos: newToDos,
    })
  }

  clearComplete = (evt) => {
    let newToDos = this.state.todos.filter((todo) => todo.complete === false)
    this.setState({ todos: newToDos })
  }

  handleDelete = (evt,id) => {
    let newToDos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ todos: newToDos })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.addTodo} autoFocus />
        </header>
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed" onClick={this.clearComplete}>
            Clear completed
          </button>
        </footer>
      </section>
    )
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.complete} onChange={this.props.handleComplete}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.props.handleDelete} />
        </div>
      </li>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem title={todo.title} handleDelete={(evt) => {this.props.handleDelete(evt, todo.id)
              }}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default App

