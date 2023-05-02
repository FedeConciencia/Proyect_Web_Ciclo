import Text from "@/components/mixins/Text/Text";
import styles from './copyright.module.scss'

const Copyright = () => {
  return (
    <div className={styles.container}>
      <Text variant="span" center={true} colored> @ 2023 Ciclo Soluciones Creativas </Text>
    </div>
  );
};
Copyright.displayName = 'Copyright';
export default Copyright;
