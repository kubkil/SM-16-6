import React from 'react';
import style from '../../styles/Title.css';

const Title = props => (
  <div>
    <h1 className={style.appTitle}>{props.title}</h1>
    <p className={style.appNumberOfTasks}>Ilość zadań to: {props.numberoftasks}</p>
  </div>
// nawiasy?
);

export default Title;