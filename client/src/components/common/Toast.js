import React, { useState, useEffect } from "react";
import styles from "../../styles/toast.module.css";

const Toast = ({ open, type, labelText }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const closeToast = () => {
    setIsOpen(false);
  };

  const toastAppearance = {
    success: {
      style: styles.success,
    },
  }[type];

  if (!isOpen) {
    return null;
  }

  return (
    <div className={toastAppearance.style}>
      {labelText}{" "}
      <span className={styles.close} onClick={closeToast}>
        &times;
      </span>
    </div>
  );
};

export default Toast;
