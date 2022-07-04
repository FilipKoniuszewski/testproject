import React from "react";
import Button from "./Button.jsx";
import "../Styles/RegisterModal.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import * as propTypes from "prop-types";
import CSS from "csstype";

interface Props {
  clickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  header: string;
  paragraph: string;
  accent: string;
}

const RegisterModal = React.forwardRef<HTMLDivElement, Props>(
  ({ clickEvent, header, paragraph, accent }, ref) => {
    const style: CSS.Properties = {
      userSelect: "none",
      backgroundColor: "hsl(0, 0%, 100%)",
      borderRadius: "1rem",
      position: "absolute",
    };

    const contentStyle: CSS.Properties = {
      textAlign: "center",
      padding: "1.5rem",
    };

    const paragraphStyle: CSS.Properties = {
      maxWidth: "32ch",
      wordWrap: "break-word",
    };

    const buttonCloseStyle: CSS.Properties = {
      background: "none",
      outline: "none",
      fontSize: "1rem",
      display: "flex",
      justifyContent: "center",
      borderTop: "1px solid grey",
      borderBottom: "none",
      borderLeft: "none",
      borderRight: "none",
      width: "100%",
      borderRadius: "0 0 1rem 1rem",
      padding: "0.7rem 0",
      color: accent,
      fontWeight: "700",
    };

    return (
      <div
        ref={ref}
        data-testid="modal-1"
        className="register-modal"
        style={style}
      >
        <div className="register-modal__content" style={contentStyle}>
          <IconContext.Provider value={{ color: accent, size: "1.5em" }}>
            <AiOutlineInfoCircle />
          </IconContext.Provider>
          <h3 className="register-modal__header">{header}</h3>
          <p className="register-modal__info" style={paragraphStyle}>
            {paragraph}
          </p>
        </div>

        <button
          data-testid="close-modal-1"
          onClick={clickEvent}
          className="close-modal-button"
          style={buttonCloseStyle}
        >
          Close
        </button>
      </div>
    );
  }
);

export default RegisterModal;
