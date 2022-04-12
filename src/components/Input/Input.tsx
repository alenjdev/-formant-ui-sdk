import * as React from "react";
import styles from "./Input.module.scss";

export interface IInputProps {
  type?: string;
  label: string;
  inputType?: "large" | "small" | "simple";
  error?: boolean;
  name?: string;
  helperText?: string;
  placeHolder?: string;
  className?: string;
  onChange:
    | React.Dispatch<React.SetStateAction<string | number>>
    | ((_: string | number) => void);
}

const Input: React.FC<IInputProps> = ({
  type,
  label,
  inputType,
  error,
  name,
  helperText,
  placeHolder,
  className,
  onChange,
}) => {
  return (
    <React.Fragment>
      {inputType === "simple" ? (
        <div className={`${styles.simple} ${className}`}>
          <input
            className={`${styles["simple-input"]} ${
              styles[`simple-input-${error ? "error" : "normal"}`]
            }`}
            placeholder={placeHolder}
          />
          {helperText !== undefined && <span>{helperText}</span>}
        </div>
      ) : (
        <span
          className={`${styles.field} ${
            styles[`field-${error ? "error" : "normal"}`]
          } ${className} `}
        >
          <input
            id={name}
            className={`${styles["field-input"]} 
          ${styles[`field-input-${inputType}`]}
          `}
            onChange={(ev) => onChange(ev.target.value)}
            type={type}
            placeholder=" "
          />
          <label
            htmlFor={name}
            className={`
        ${styles["field-label"]} ${styles[`field-label-${inputType}`]}`}
          >
            {label}
          </label>
        </span>
      )}
    </React.Fragment>
  );
};

export default Input;
