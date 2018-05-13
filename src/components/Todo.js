import React from 'react';
import style from '../../styles/Todo.css';

const Todo = props =>
  <li className={style.appToDoItem}>
    {props.text}
    <button onClick={() => props.remove(props.id)}>X</button>
  </li>

export default Todo;