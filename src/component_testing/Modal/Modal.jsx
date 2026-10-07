import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styles from "./Modal.module.scss";

const Modal = ({
  children = "button",
  modalHeader,
  modalBody,
  size = "md",
  radius = "md",
  placement = "center",
  backdrop = "transparent",
  color = "primary",
  classNames = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const combinedClassNames = `
   ${styles.modal}
   ${styles[`size-${size}`]}
   ${styles[`radius-${radius}`]}
   ${styles[`placement-${placement}`]}
   ${styles[`backdrop-${backdrop}`]}
   ${styles[`color-${color}`]}
  ${scroll !== "none" ? styles[`scroll-${scroll}`] : ""}
   `.trim();

  const finalClassNames = `${combinedClassNames} ${classNames}`.trim();

  return (
    <>
      {/* Initial button to open the modal */}
      <button className={styles.openButton} onClick={handleOpen}>
        {children}
      </button>
      {isVisible && (
        <div
          className={`${styles.backdrop} ${styles[`backdrop-${backdrop}`]}`}
          onClick={handleClose}
        >
          <aside className={finalClassNames} role="dialog" aria-modal="true">
            {/* Modal content */}
            {modalHeader && (
              <div className={styles.modalHeader}>{modalHeader}</div>
            )}
            <div className={styles.modalBody}>{modalBody}</div>
            {/* Close button inside the modal */}
            <button className={styles.closeButton} onClick={handleClose}>
              <MdClose />
            </button>
          </aside>
        </div>
      )}
    </>
  );
};

export default Modal;
