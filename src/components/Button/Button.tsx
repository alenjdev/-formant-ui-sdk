import * as React from "react";
import styles from "./Button.module.scss";
import LoadingIndicator from "../LoadingIndicator/index";

export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  size: "mini" | "small" | "medium" | "large";
  type: "primary" | "secondary" | "tertiary" | "exit";
  bold?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  children,
  size,
  type,
  bold,
  disabled,
  loading,
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      style={{ fontWeight: bold ? 600 : 400 }}
      className={`
      ${styles.btn} 
      ${styles[`btn-${size}`]} 
      ${styles[`btn-${type}`]} 
      ${className}`}
    >
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
};

export default Button;
