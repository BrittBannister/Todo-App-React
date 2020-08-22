//TODO: user can add a todo-type into top input and hits enter , add it as a todo 
//and empty the input
//TODO: mark todo as complete-click circle, toggle if its complete or not
//TODO: delet a todo-user click on 'X', removes it from list
//TODO: delete all completed todos- clicks clear completed button



import React, { Component } from "react";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <TodoList todos={this.state.todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}


// state = {
//     accounts: [{ id: 2938 }, { id: 3874 }, { id: 6984 }]
//   }

//   handleDelete = (event, accountId) => {
//     const newAccounts = this.state.accounts.filter(
//       account => account.id !== accountId
//     )
//     this.setState({ accounts: newAccounts })
//   }

//   render () {
//     return (
//       <React.Fragment>
//         <h1>Active Accounts</h1>
//         {this.state.accounts.map(account => (
//           <div>
//             <p>Account: {account.id}</p>
//             <button onClick={event => this.handleDelete(event, account.id)}>
//               Delete Account
//             </button>
//           </div>
//         ))}
//       </React.Fragment>
//     )
//   }




class TodoItem extends Component {
  // state = {
  //  completed: false
  // }

  // handleToggle = (evt) => {
  //   this.setState(state =>({
  //     completed: !state.true
  //   }))
  // }
  render() {
    return (
      <li className={this.props.completed ? "completed" : "//TODO false"}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} />
          <label>{this.props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem title={todo.title} completed={todo.completed} />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;

