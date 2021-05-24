import React from "react";
import styles from './popup.module.css';

// @ts-ignore
const Popup = ({ children, isOpened, close }) => {
  return (
    <>
      {isOpened &&
        <div className={styles.overlay}>
          <section className={styles.modal}>
            <button className={styles.close} onClick={close}>Закрыть окно</button>
            { children }
          </section>
        </div>
      }
    </>
  )
}

export default Popup;
