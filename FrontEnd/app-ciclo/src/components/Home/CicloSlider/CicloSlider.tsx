import { Text } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./cicloslider.module.scss";
import Image from "next/image";
import { useState } from "react";
import Listado from "@/components/Home/Listado/Listado";

type ciclo_list = {
  title?: string;
  options?: { key: string; text: string; title?: string }[] | undefined;
};

type SafeNumber = number | `${number}`;

type second_column = {
  alt: string;
  href: string | undefined;
  src: string;
  height: SafeNumber | undefined;
  width: SafeNumber | undefined;
};

type props = {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  first_list: ciclo_list;
  second_list: ciclo_list;
  second_column?: second_column;
  id: string;
};

function CicloSlider({
  title,
  subtitle,
  description,
  first_list,
  second_list,
  second_column,
  id,
}: props) {
  const { isDesktop } = useDeviceType();

  return (
    <div className={`${styles.container} ${styles.slider}`} id={id}>
      <div className={styles.first_column}>
        <div className={styles.title}>
          <Text
            variant="h1"
            className={styles.title__text}
            textSize="xxxl"
            weight="bold"
          >
            {title}
          </Text>
          <Text variant="h2" className={styles.title__subtitle} left>
            {subtitle}
          </Text>
          <br />
          <Text variant="p" className={styles.title__description} left>
            {description}
          </Text>
          <br />
        </div>
        <Listado {...first_list} />
        <div className={styles.divider}></div>
        <Listado {...second_list} />
      </div>
      {isDesktop && (
        <div className={styles.second_column}>
          {second_column && (
            <Image
              alt={second_column.alt}
              src={second_column.src}
              width={second_column.width}
              height={second_column.height}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default CicloSlider;
