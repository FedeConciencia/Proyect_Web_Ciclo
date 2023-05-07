import { Text } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import { BiChevronDown } from "react-icons/bi";
import styles from "./cicloslider.module.scss";
import styles2 from "./cicloactivo.module.scss";
import FormUnirme from "@/components/FormUnirme/FormUnirme";
import Listado from "../Listado/Listado";

type option_ciclo_list = {
  key: string;
  text: string;
};
type ciclo_list = {
  title?: string;
  options: Array<option_ciclo_list>;
};

type props = {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  first_list?: ciclo_list;
  second_list?: ciclo_list;
};
function CicloActivo({
  title,
  subtitle,
  description,
  first_list,
  second_list,
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
        <div className={styles2.second_column}>
          <div className={styles2.form_background}>
            <FormUnirme />
          </div>
        </div>
      )}
    </div>
  );
}

export default CicloActivo;
