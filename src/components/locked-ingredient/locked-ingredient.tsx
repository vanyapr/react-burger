import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './locked-ingredient.module.css';

// @ts-ignore
const LockedIngredient = ({type, text, price, thumbnail}) => {
  return (
    <div className={`pl-8 ${styles.element}`}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </div>
  )
}

export default LockedIngredient;
