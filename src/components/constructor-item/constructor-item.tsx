import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-item.module.css';

// @ts-ignore
const ConstructorItem = ({name, price, image, openDetails}) => {
  return(
    <li className={styles.item}>
      <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>{name}</h3>
      <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
        <span className="mr-2">{price}</span>
        <CurrencyIcon type="secondary"/>
      </p>
      <img className={`ml-4 mr-4 ${styles.image}`} width='240' height='120' src={image} alt={name} onClick={openDetails}/>
      <p className={`text text_type_digits-default ${styles.count}`}>1</p>
    </li>
  )
}

export default ConstructorItem;
