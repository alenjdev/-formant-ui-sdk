import * as React from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  size: "mini" | "small" | "medium" | "large";
  type: "primary" | "secondary" | "tertiary" | "exit";
  bold?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  children,
  size,
  type,
  bold,
  disabled,
}) => {
  const onClicked = () => {
    if (disabled) return;
    if (!!onClick) onClick;
  };
  return (
    <button
      disabled={disabled}
      onClick={onClicked}
      style={{ fontWeight: bold ? 600 : 400 }}
      className={`
      ${styles.btn} 
      ${styles[`btn-${size}`]} 
      ${styles[`btn-${type}`]} 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
