import styles from "./info.module.scss";
import { MaxContainer, Text, Link } from "@/components/mixins";
import Servicios from "../Servicios/Servicios";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Info = ({ servicios }: any) => {
  return (
    <div className={styles.wrapper}>
      <MaxContainer>
        {servicios && <Servicios />}
        <div className={styles.info}>
          <Text
            variant="span"
            center={true}
            textSize="l"
            weight="bold"
            className={styles.main_info}
          >
            Comienza un nuevo ciclo para la construccion en mendoza
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="s"
            weight="light"
            textCase="uppercase"
          >
            E-MAIL
          </Text>
          <Text variant="span" center={true}>
            Info@ciclosoluciones.com
          </Text>
          <Text
            variant="span"
            center={true}
            textSize="s"
            weight="light"
            textCase="uppercase"
          >
            Telefono
          </Text>
          <Text variant="span" center={true}>
            <a href="tel:+5492612765262">+549 261 276 5262</a>
          </Text>
          <Text weight="bold" center={true}>
            Redes Sociales:
          </Text>
        </div>
        <br />
        <div className={styles.logos}>
          <Link href="" noWidth target="_blank">
            <FacebookIcon className={styles.logo} />
          </Link>
          <Link href="" noWidth target="_blank">
            <InstagramIcon className={styles.logo} />
          </Link>
          <Link href="" noWidth target="_blank">
            <LinkedInIcon className={styles.logo} />
          </Link>
        </div>
      </MaxContainer>
    </div>
  );
};

export default Info;
