import Image from "next/image";
import styles from "./aliados.module.scss";

const Aliados = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

Aliados.displayName = "Aliados";
export default Aliados;
