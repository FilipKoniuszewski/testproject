import React, { FC } from "react";
import PropTypes from "prop-types";
import * as propTypes from "prop-types";
import CSS from "csstype";

interface Props {
  clickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  size: "sm" | "md" | "lg";
  isModalOpen: boolean;
  content: string;
}

const Button: FC<Props> = ({
  clickEvent,
  className,
  size,
  isModalOpen,
  content,
}) => {
  const style: CSS.Properties = {
    padding: `${
      size === "sm" ? "1rem 3rem" : size === "md" ? "2rem 4rem" : "3rem 7rem"
    }`,
    fontSize: `${size === "sm" ? "1rem" : size === "md" ? "2rem" : "3rem"}`,
    fontWeight: `${size === "sm" ? "500" : size === "md" ? "700" : "700"}`,
    border: "none",
    userSelect: "none",
    color: "hsl(356, 100%, 66%)",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: `${size === "sm" ? "2rem" : size === "md" ? "4rem" : "5rem"}`,
  };

  return (
    <button
      disabled={isModalOpen}
      data-testid="button-1"
      onClick={clickEvent}
      style={style}
      className={className}
    >
      {content}
    </button>
  );
};
export default Button;
