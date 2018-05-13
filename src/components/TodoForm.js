import React from 'react';
import style from '../../styles/TodoForm.css';

const TodoForm = props => (
  <div>
    <label for="todo">Name new todo</label>
    <input type="text" id="todo" name="todo" />
    <button type="submit">Add</button>
  </div>
)