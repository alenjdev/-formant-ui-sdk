import * as React from "react";
import styles from "./Formant.module.scss";

const Formant: React.FC = ({ children }) => {
  return <div className={styles.formant}>{children}</div>;
};

export default Formant;
