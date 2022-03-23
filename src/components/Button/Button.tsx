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
  return (
    <button
      disabled={disabled}
      onClick={onClick}
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
