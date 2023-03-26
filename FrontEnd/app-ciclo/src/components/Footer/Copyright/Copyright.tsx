import Text from "@/components/mixins/Text/Text";
import styles from './copyright.module.scss'

const Copyright = () => {
  return (
    <div className={styles.container}>
      <Text variant="span" center={true}> @ 2023 Ciclo Soluciones Creativas </Text>
    </div>
  );
};

export default Copyright;
