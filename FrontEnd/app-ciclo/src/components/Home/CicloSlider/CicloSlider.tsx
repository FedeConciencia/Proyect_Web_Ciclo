import { Text } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import { BiChevronDown } from "react-icons/bi";
import styles from "./cicloslider.module.scss";
import Image from "next/image";

type option_ciclo_list = {
  key: string;
  text: string;
};
type ciclo_list = {
  title?: string;
  options: option_ciclo_list[] | undefined;
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
};
function CicloSlider({
  title,
  subtitle,
  description,
  first_list,
  second_list,
  second_column,
}: props) {
  const { isDesktop } = useDeviceType();

  return (
    <div className={`${styles.container} ${styles.slider}`}>
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
          <Text variant="h2" textSize="s" left>
            {subtitle}
          </Text>
          <br />
          <Text variant="p" textSize="s" left>
            {description}
          </Text>
          <br />
        </div>
        <div className={styles.first_list}>
          <div className={styles.list_title_with_icon}>
            <Text className={styles.list_title} left textCase="uppercase">
              {first_list?.title}
            </Text>
            <BiChevronDown color={"#ffb71b"} fontSize={20} />
          </div>
          <ul>
            {first_list.options?.map((option) => {
              return <li key={option.key}>{option.text}</li>;
            })}
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.second_list}>
          <div className={styles.list_title_with_icon}>
            <Text className={styles.list_title} left textCase="uppercase">
              {second_list?.title}
            </Text>
            <BiChevronDown color={"#ffb71b"} fontSize={20} />
          </div>
          <ul>
            {second_list.options?.map((option) => {
              return <li key={option.key}>{option.text}</li>;
            })}
          </ul>
        </div>
      </div>
      {isDesktop && (
        <div className={styles.second_column}>
          {second_column && (
            <Image
              alt={second_column.alt}
              src={second_column.src}
              height={second_column.height}
              width={second_column.width}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default CicloSlider;
