import Text from "@/components/mixins/Text/Text";
import styles from "./copyright.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className={styles.container}>
      <Text variant="span" center={true} colored>
        {" "}
        @ 2023 Ciclo Soluciones Creativas{" "}
      </Text>
      <div className={styles.whatsapp}>
        <FaWhatsapp color="#fff" fontSize={45} />
      </div>
    </div>
  );
};
Copyright.displayName = "Copyright";
export default Copyright;
