import React, { useState } from "react";
import "../Styles/RegisterModal.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import ClickAwayListener from "@mui/base/ClickAwayListener";

interface ModalProps {
  onClose: () => void;
  isModalVisible: boolean;
  header: string;
  paragraph: string;
  accent: string;
}

const RegisterModal = ({
  onClose,
  isModalVisible,
  header,
  paragraph,
  accent,
}: ModalProps) => {
  if (!isModalVisible) return null;

  return (
    <>
      <div className="overlay"></div>
      <ClickAwayListener onClickAway={onClose}>
        <div data-testid="modal-1" className="register-modal">
          <div className="register-modal__content">
            <IconContext.Provider value={{ color: accent, size: "1.5em" }}>
              <AiOutlineInfoCircle />
            </IconContext.Provider>
            <h3 className="register-modal__header">{header}</h3>
            <p className="register-modal__info">{paragraph}</p>
          </div>
          <button
            style={{ color: `${accent}` }}
            data-testid="close-modal-1"
            onClick={onClose}
            className="close-modal-button"
          >
            Close
          </button>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default RegisterModal;
