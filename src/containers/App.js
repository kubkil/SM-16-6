import React from 'react';
import { hot } from 'react-hot-loader';
import uuid from 'uuid';
import styles from '../../styles/App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import AddTodo from '../components/AddTodo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todos: [
        {
          id: 1,
          text: 'clean room'
        }
      ]
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ todoText: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    const todo = {
      id: uuid.v4(),
      text: this.state.todoText
    };
    this.setState({
      todoText: '',
      todos: [...this.state.todos, todo]
    });
  };

  removeTodo(id) {
    const remainder = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: remainder });
  }

  render() {
    return (
      <div className={styles.container}>
        <Title title='ToDo' numberOfTasks={this.state.todos.length} />
        <AddTodo
          onSubmit={this.onSubmit}
          todoText={this.state.todoText}
          onChange={this.onChange}
        />
        <TodoList todos={this.state.todos} remove={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default hot(module)(App);