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
              alt="soluciones creativas"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text} textSize="xxl" weight="medium">
              Encontrá tu solución constructiva
            </Text>
          </div>
          <div className={styles.line}></div>
          <div>
            <Image
              src="/servicio_2.webp"
              alt="seguí tu proyecto"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text} textSize="xxl" weight="medium">
              Seguí el avance de tu proyecto
            </Text>
          </div>
          <div className={styles.line}></div>
          <div>
            <Image
              src="/servicio_3.webp"
              alt="disfruta tu inversión"
              width={169}
              height={110}
            />
            <Text variant="span" center={true} className={styles.text} textSize="xxl" weight="medium">
              Disfrutá tu inversión
            </Text>
          </div>
        </div>
      </div>
    </MaxContainer>
  );
};

Servicios.displayName = 'Servicios';
export default Servicios;
