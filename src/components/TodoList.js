import React from 'react';
import styles from '../../styles/TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, remove }) => {
  const todoArr = todos.map(todo => (
    <Todo key={todo.id} todo={todo} remove={remove} />
  ));
  return <ol className={styles['todo-list']}>{todoArr}</ol>;
};

export default TodoList;