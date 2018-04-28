import React from 'react';
import style from '../../styles/Title.css';

// props w nawiasie? chyba bez różnicy
const Title = props => (
  <div>
    <h1 className={style.appTitle}>{props.title}</h1>
    <p className={style.appNumberOfTasks}>Ilość zadań to: {props.numberoftasks}</p>
  </div>
)

export default Title;