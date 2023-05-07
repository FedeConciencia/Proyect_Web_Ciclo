import { Text } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./cicloslider.module.scss";
import Image from "next/image";

type option_ciclo_estrategico_list = {
  key: string;
  text: string;
  title: string;
};
type ciclo_list = {
  title?: string;
  options: Array<option_ciclo_estrategico_list>;
};

type props = {
  title?: string;
  description?: string;
  className?: string;
  first_list?: ciclo_list;
};
function CicloEstrategico({ title, description, first_list }: props) {
  const { isDesktop } = useDeviceType();

  return (
    <div className={`${styles.container} ${styles.estrategico}`}>
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
          <br />
          <Text variant="p" className={styles.title__description} left>
            {description}
          </Text>
          <br />
        </div>
        <div>
          <div>
            <Text className={styles.list_title} left textCase="uppercase">
              {first_list?.title}
            </Text>
          </div>
          <ul>
            {first_list?.options.map((option) => {
              return (
                <li key={option.key} className={styles.estrategic_list}>
                  <Text variant="h3" className={styles.list} weight="bold">
                    {option.title}
                  </Text>
                  <br />
                  <Text variant="span" className={styles.list} weight="medium">
                    {option.text}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isDesktop && (
        <div className={styles.second_column_with_images}>
          <div className={styles.second_column_images}>
            <div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/ltn_brand_dark.png"
                  alt="Grupo LTN"
                  width={120}
                  height={50}
                />
              </div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/itu_brand_dark.png"
                  alt="Instituto Tecnologico Universitario"
                  width={120}
                  height={50}
                />
              </div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/newpanel_brand_dark.png"
                  alt="Sistema de construcción sismotermica"
                  width={120}
                  height={50}
                />
              </div>
            </div>
            <div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/extrabrut_brand_dark.png"
                  alt="Extra Brut Construir Mejor"
                  width={120}
                  height={50}
                />
              </div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/cassaforma_brand_dark.png"
                  alt="Sistema Constructivo Integral"
                  width={120}
                  height={50}
                />
              </div>
              <div className={styles.card_brand}>
                <Image
                  src="/ciclos/ctm_brand_dark.png"
                  alt="Colegios Tecnicos Mendoza"
                  width={120}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CicloEstrategico;
