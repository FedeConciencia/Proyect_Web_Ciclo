import Text from "@/components/mixins/Text/Text";
import styles from "./copyright.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Copyright = () => {
  return (
    <div className={styles.container}>
      <Text variant="span" center={true} colored>
        {" "}
        @ 2023 Ciclo Soluciones Creativas{" "}
      </Text>
      <div className={styles.whatsapp}>
        <Link href={'https://api.whatsapp.com/send/?phone=5492612765262&text=Hola%21&type=phone_number&app_absent=0'}>
          <FaWhatsapp color="#fff" fontSize={45} />
        </Link>
      </div>
    </div>
  )
};
Copyright.displayName = "Copyright";
export default Copyright;
