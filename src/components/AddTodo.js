import React from 'react';
import styles from '../../styles/AddTodo.css';

const AddTodo = ({ onSubmit, todoText, onChange }) => (
  <form className={styles['todo-form']} onSubmit={onSubmit}>
    <input id='out-of-range' type='text' value={todoText} onChange={onChange} placeholder='Max 50 chars' maxLength='50' />
    <button type='submit'>Add todo</button>
  </form>
);

export default AddTodo;