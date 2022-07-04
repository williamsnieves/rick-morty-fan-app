import React from "react";
import styles from "../../styles/modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.modalClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;