import React from "react";
import "./modal.scss";

function Modal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={onClose}>
              <img
                alt="restart"
                src="https://memory-marvel.vercel.app/assets/refresh-e366aa9c.svg"
              />
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
