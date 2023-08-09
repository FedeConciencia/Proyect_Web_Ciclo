import { Text } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./cicloslider.module.scss";
import styles2 from "./cicloactivo.module.scss";
import FormUnirme from "@/components/FormUnirme/FormUnirme";
import Listado from "@/components/Home/Listado/Listado";

type option_ciclo_list = {
  key: string;
  text: string;
};
type ciclo_list = {
  title?: string;
  options: Array<option_ciclo_list>;
};

type props = {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  first_list?: ciclo_list;
  second_list?: ciclo_list;
  handleSuccessResponse?: any;
};
function CicloActivo({
  title,
  subtitle,
  description,
  first_list,
  second_list,
  id,
  handleSuccessResponse,
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
        <div className={styles2.second_column}>
          <div className={styles2.form_background}>
            <FormUnirme  handleSuccessResponse={handleSuccessResponse}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default CicloActivo;
