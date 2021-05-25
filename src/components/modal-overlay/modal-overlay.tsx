import React from "react";
import styles from './modal-overlay.module.css';
import Modal from "../modal/modal";

// @ts-ignore
const ModalOverlay = ({ children, isOpened, close }) => {
  return (
    <>
      {isOpened &&
        <div className={styles.overlay}>
          <Modal children={children} close={close} />
        </div>
      }
    </>
  )
}

export default ModalOverlay;
