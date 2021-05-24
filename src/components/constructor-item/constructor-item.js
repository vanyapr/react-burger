import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-item.module.css';

const ConstructorItem = ({name, price, image}) => {
  return(
    <li className={styles.item}>
      <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>{name}</h3>
      <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
        <span className="mr-2">{price}</span>
        <CurrencyIcon type="secondary"/>
      </p>
      <img className="ml-4 mr-4" width='240' height='120' src={image} alt={name}/>
      <p className={`text text_type_digits-default ${styles.count}`}>1</p>
    </li>
  )
}

export default ConstructorItem;
