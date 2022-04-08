import * as React from "react";
import styles from "./Input.module.scss";

export interface IInputProps {
  type: string;
  onChange: () => void;
  label: string;
}

const Input: React.FC<IInputProps> = ({ type, label, onChange }) => {
  return (
    <span className={styles.field}>
      <input
        className={styles["field-input"]}
        onChange={onChange}
        type={type}
      />
      <label id="la" className={styles["field-label"]}>
        {label}
      </label>
    </span>
  );
};

export default Input;
