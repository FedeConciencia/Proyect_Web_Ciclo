import React, { ReactNode } from "react";
import styles from './maxContainer.module.scss';


type Props = {
  children: ReactNode;
  max?: any; // any porque por defecto es null, Pero puede recibir un number
  style?: object;
};

const MaxContainer = ({ children, max = null, style = {} }: Props) => (
  <div style={{ ...style, maxWidth: max }} className={styles.maxContainer}>
    {children}
  </div>
  
);


export default MaxContainer;
