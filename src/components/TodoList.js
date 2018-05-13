import React from 'react';
import style from '../../styles/TodoList.css';
// kropka przed / potrzebna?
import Todo from './Todo';

const TodoList = props => {
  const todoArr = props.data.map(todo =>
    <Todo key={todo.id} text={todo.text} remove={props.remove} />
  );
  return (
    <ol>{todoArr}</ol>
  );
}

export default TodoList;