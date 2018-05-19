import React from 'react';
import styles from '../../styles/Title.css';

const Title = ({ title, numberOfTasks }) => (
  <div className={styles.header}>
    <h1>{title}</h1>
    <p>Ilość zadań to: {numberOfTasks}</p>
  </div>
);

export default Title;