import * as React from "react";
import styles from "./Typography.module.scss";

export interface ITypographyProps {
  children: React.ReactNode;
  type:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body"
    | "list"
    | "label"
    | "minimum";
}

const Typography: React.FC<ITypographyProps> = ({ type, children }) => {
  return (
    <span className={`${styles.typography} ${styles[`typography-${type}`]}`}>
      {children}
    </span>
  );
};

export default Typography;
