import React from 'react';
import uuid from 'uuid';
import style from '../../styles/App.css';
import Title from '../components/Title.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    // like push but does not modify the state
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title='ToDo' numberoftasks={this.state.data.length} />
      </div>
    );
  }
}

export default App;