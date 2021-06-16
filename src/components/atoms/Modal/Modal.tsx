import React from "react";

import styles from "./Modal.scss";
import ModalPortal from "./ModalPortal";
import Button from "components/atoms/Button";
import CloseIcon from "components/icons/CloseIcon";

export interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, children, onClose }) => {
  return (
    <ModalPortal>
      {isOpen && (
        <div className={styles.mask} onClick={onClose}>
          <div
            data-test-id={`${title}-modal-content`}
            className={styles.container}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.content}>
              <div className={styles.header}>
                <span>{title}</span>
                <Button data-test-id="btn-modal-close" onClick={onClose} variant="plain">
                  <CloseIcon />
                </Button>
              </div>
              {children}
              <Button className={styles.btnCloseMobile} onClick={onClose}>
                <CloseIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

export default Modal;
