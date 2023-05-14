import styles from "./info.module.scss";
import { MaxContainer, Text, Link } from "@/components/mixins";
import Servicios from "../Servicios/Servicios";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Image from "next/image";

const Info = ({ servicios }: any) => {
  return (
    <div className={styles.wrapper}>
      <MaxContainer>
        {servicios && <Servicios />}
        <div className={styles.icon_yellow}>
          <Image
            src="/ciclos/icon_yellow.png"
            alt="Ciclos"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.info}>
          <Text
            variant="span"
            center={true}
            textSize="xxl"
            weight="bold"
            colored
            className={styles.main_info}
          >
            Comienza un nuevo ciclo para la construccion en mendoza
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="l"
            weight="medium"
            colored
            textCase="uppercase"
          >
            E-MAIL
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="large"
            colored
            weight="medium"
            className={styles.resalted}
          >
            Info@ciclosoluciones.com
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="l"
            weight="medium"
            colored
            textCase="uppercase"
          >
            Telefono
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="large"
            colored
            weight="medium"
            className={styles.resalted}
          >
            <a href="tel:+5492612765262">+549 261 276 5262</a>
          </Text>
          <Text weight="bold" center={true} colored>
            Redes Sociales:
          </Text>
        </div>
        <br />
        <div className={styles.logos}>
          <Link href="" noWidth target="_blank">
            <FacebookIcon className={styles.logo} />
          </Link>
          <Link href="" noWidth target="_blank">
            <AiFillInstagram className={styles.logo} />
          </Link>
          <Link href="" noWidth target="_blank">
            <FaLinkedinIn className={styles.logo} />
          </Link>
        </div>
      </MaxContainer>
    </div>
  );
};

export default Info;
