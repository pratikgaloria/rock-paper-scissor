import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal: React.FC = ({ children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLDivElement>();

  useEffect(() => {
    const div = document.getElementById('modal-root');

    if (!div) {
      const newDiv = document.createElement('div');
      newDiv.id = 'modal-root';
      document.body.appendChild(newDiv);
      setModalRoot(newDiv);
    } else {
      setModalRoot(div as HTMLDivElement);
    }
  }, [modalRoot, setModalRoot]);

  return modalRoot ? ReactDOM.createPortal(children, modalRoot) : null;
};

export default ModalPortal;
