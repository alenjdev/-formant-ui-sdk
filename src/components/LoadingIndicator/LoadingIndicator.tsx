import * as React from "react";
import styles from "./LoadingIndicator.module.scss";
import loading from "../../images/loading.png";

export interface ILoadingIndicatorProps {
  size?: "small" | "medium" | "large";
}

const Formant: React.FC<ILoadingIndicatorProps> = ({ size }) => {
  return (
    <img
      src={loading}
      className={!!size ? styles[`indicator-${size}`] : styles.indicator}
    />
  );
};

export default Formant;
