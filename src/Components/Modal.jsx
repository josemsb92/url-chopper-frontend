import React from "react";
import reactDom from "react-dom";
// onOpen and setOnOpen= is the component that you pass to show or not the modal
// children= what you want to display inside the modal
const Modal = ({ onOpen, onClose, children }) => {


  return reactDom.createPortal(
    <>
      {onOpen ? (
        <div className="modal-container" onMouseDown={onClose}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="button-primary">
              X
            </button>
            <div className="modal-content">
            {children}
            </div>
            
          </div>
        </div>
      ) : null}
    </>,
/////////////////CAMBIAR ESTO DE ABAJO PARA QUE EL MODAL SE RENDERICE DENTRO DE VIEWS EN INDEX
    document.getElementById("root")
  );
};

export default Modal;
