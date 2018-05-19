import React from 'react';
import styles from '../../styles/Todo.css';

const Todo = ({ todo, remove }) => (
  <li id={todo.id} className={styles.todo}>
    {todo.text}
    <button onClick={() => remove(todo.id)}>X</button>
  </li>
);

export default Todo;