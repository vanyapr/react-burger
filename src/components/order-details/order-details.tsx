import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import orderDone from '../../images/order-done.png'
import styles from './order-details.module.css';

// @ts-ignore
const OrderDetails = ({isOpened, close}) => {
  return (
    <ModalOverlay isOpened={isOpened} close={close}>
      <h1 className="text text_type_digits-large mt-30">034536</h1>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа
      </p>
      <img className="mt-15" src={orderDone} alt="Заказ готовится"/>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Дождитесь готовности на орбитальной станции</p>
    </ModalOverlay>
  )
}

export default OrderDetails;
