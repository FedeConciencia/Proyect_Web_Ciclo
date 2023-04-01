/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link, Text } from "@/components/mixins";
import styles from "./dropdown.module.scss";

type props = {
  options?: object;
  close?: boolean;
};

const Dropdown = (props: props) => {
  const { options, close } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.wrapper}>
      {/* <button className={styles.menu} onClick={handleOpen}>
        <Text textStyle={{ fontSize: "16px" }}> Nuestra Propuesta</Text>
      </button> */}
      {open ? (
        <div className={styles.container}>
          <div className={styles.items}>
            <div className={styles.item}>
              <Text textStyle={{ fontSize: "16px" }} textColor="#101820">
                Ciclo Integral
              </Text>
            </div>

            <div className={styles.item}>
              <Link href="/account">
                <Text textStyle={{ fontSize: "15px" }} textColor="#101820">
                  Ciclo Colaborativo
                </Text>
              </Link>
            </div>

            <div className={styles.item}>
              <Link href="/account?orders=true">
                <Text textStyle={{ fontSize: "16px" }} textColor="#101820">
                  Ciclo estratégico
                </Text>
              </Link>
            </div>

            <div className={styles.item} role="button">
              <Text textStyle={{ fontSize: "16px" }} textColor="#101820">
                Ciclo activo
              </Text>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
