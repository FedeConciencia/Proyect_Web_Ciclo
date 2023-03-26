import Image from "next/image";
import styles from "./servicios.module.scss";
import { MaxContainer, Text } from "@/components/mixins";

const Servicios = () => {
  return (
    <MaxContainer>
      <div className={styles.container}>
        <div className={styles.banners}>
          <div>
            <Image
              src="/servicio_1.webp"
              alt="asdasd"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text}>
              Encontrá tu solución constructiva
            </Text>
          </div>
          <div className={styles.line}></div>
          <div>
            <Image
              src="/servicio_2.webp"
              alt="asdasd"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text}>
              Seguí el avance de tu proyecto
            </Text>
          </div>
          <div className={styles.line}></div>
          <div>
            <Image
              src="/servicio_3.webp"
              alt="asdasd"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text}>
              Disfrutá tu inversión
            </Text>
          </div>
        </div>
      </div>
    </MaxContainer>
  );
};

export default Servicios;
