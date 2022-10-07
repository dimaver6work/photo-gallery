import "./modal.css";
import React from "react";
import ReactModal from "react-modal";

export const Modal = ({ children, ...args }) => {
  return (
    <ReactModal
      ariaHideApp={false}
      className="modal-container"
      overlayClassName="modal-overlay"
      {...args}
    >
      <div class="wrapper-modal">{children}</div>
    </ReactModal>
  );
};
