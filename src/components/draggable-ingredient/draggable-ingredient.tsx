import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './draggable-ingredient.module.css';

// @ts-ignore
const DraggableIngredient = ({isLocked, text, price, thumbnail}) => {
    return (
      <div className={`pl-8 ${styles.element}`}>
        <button className={styles.drag}>Перетянуть элемент</button>
        <ConstructorElement
          isLocked={isLocked}
          text={text}
          price={price}
          thumbnail={thumbnail}
        />
      </div>
    )
}

export default DraggableIngredient;
