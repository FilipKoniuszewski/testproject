import React, { FC } from "react";

interface ButtonProps {
  onOpen: () => void;
  className: string;
  size: Size;
  isModalOpen: boolean;
  content: string;
}
export enum Size {
  small = "sm",
  medium = "md",
  large = "lg",
}

const Button: FC<ButtonProps> = ({
  onOpen,
  className,
  size,
  isModalOpen,
  content,

}) => {
  const buttonStyle =
    size === Size.small
      ? "button--sm"
      : size === Size.medium
      ? "button--md"
      : "button--lg";

  return (
    <button
      disabled={isModalOpen}
      data-testid="button-1"
      onClick={onOpen}
      className={`${className} ${buttonStyle}`}
    >
      {content}
    </button>
  );
};
export default Button;
