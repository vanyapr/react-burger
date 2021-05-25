import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './ingredient-details.module.css';

// @ts-ignore
const IngredientDetails = ({isOpened, close}) => {
  return (
    <ModalOverlay isOpened={isOpened} close={close}>
      <h1 className={`text text_type_main-large mt-10 ml-10 mr-10 ${styles.title}`}>Детали ингредиента</h1>
      <img className="mt-3" src={'https://via.placeholder.com/480x240.png'} alt="Заказ готовится"/>
      <h2 className="text text_type_main-medium mt-4">Название</h2>

      <ul className={`mt-8 mb-15 ${styles.chemistry}`}>
        <li >
          <p className={`text text_type_main-default text_color_inactive ${styles.name}`}>Калории,ккал</p>
          <p className={`text text_type_main-default text_color_inactive ${styles.value}`}>244,4</p>
        </li>
        <li>
          <p className={`text text_type_main-default text_color_inactive ${styles.name}`}>Белки, г</p>
          <p className={`text text_type_main-default text_color_inactive ${styles.value}`}>12,2</p>
        </li>
        <li>
          <p className={`text text_type_main-default text_color_inactive ${styles.name}`}>Жиры, г</p>
          <p className={`text text_type_main-default text_color_inactive ${styles.value}`}>17,2</p>
        </li>
        <li>
          <p className={`text text_type_main-default text_color_inactive ${styles.name}`}>Углеводы, г</p>
          <p className={`text text_type_main-default text_color_inactive ${styles.value}`}>10,2</p>
        </li>
      </ul>
    </ModalOverlay>
  )
}

export default IngredientDetails;
