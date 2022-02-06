import React from "react";
import styles from './modal.module.css';

// @ts-ignore
const Modal = ({ children, close }) => {
  return (
    <section className={styles.modal}>
      <button className={styles.close} onClick={close}>Закрыть окно</button>
      { children }
    </section>
  )
}

export default Modal;
