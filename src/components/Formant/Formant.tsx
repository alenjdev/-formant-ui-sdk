import * as React from "react";
import styles from "./Formant.module.scss";

export interface IFormantProps {
  type?: "application" | "module";
}

const Formant: React.FC<IFormantProps> = ({ children, type }) => {
  return (
    <div className={`${styles.formant} ${styles[`formant-${type}`]}`}>
      {children}
    </div>
  );
};

export default Formant;
