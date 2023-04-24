import Image from "next/image";
import styles from "./obra.module.scss";
import { Text } from "@/components/mixins";
import Link from "next/link";

const Obra = (props: any) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.hero_image}>
        <Image {...props.hero_image} />
      </div>
      <div className={styles.description}>
        <Text
          variant="h1"
          textColor="#ffb71b"
          textCase="uppercase"
          left
          textSize="l"
          weight="semibold"
        >
          {" "}
          {props.title}{" "}
        </Text>
        <Text variant="span"> {props.technology} </Text>
        <Text variant="span"> {props.city} </Text>
      </div>
      <div className={styles.brand_image}>
        <div>
          <Link href={props.href}>
            <Text variant="span" textSize="s" textColor="#ffffff">
              Leer Mas...
            </Text>
          </Link>
        </div>
        <Image {...props.brand_image} />
      </div>
    </div>
  </div>
);

export default Obra;
