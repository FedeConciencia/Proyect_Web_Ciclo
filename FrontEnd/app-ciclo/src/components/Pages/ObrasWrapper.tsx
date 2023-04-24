import Layout from "../Layout/Layout";
import { MaxContainer } from "@/components/mixins";
import styles from "./obras.module.scss";
import Obra from "../Obra/Obra";

const first_row_obras = [
  {
    key: "first_obra",
    hero_image: {
      src: "/obra_1.png",
      alt: "sistema SIP",
      width: 170,
      height: 100,
    },
    brand_image: {
      src: "/aliados/extra_brut.png",
      alt: "Extra Brut Construir Mejor",
      width: 170,
      height: 100,
    },
    title: "vivienda los teros",
    technology: "Sistema S.I.P",
    city: "Guaymallen, Mendoza",
    href: "",
  },
  {
    key: "second_obra",
    hero_image: {
      src: "/obra_1.png",
      alt: "sistema SIP",
      width: 170,
      height: 100,
    },
    brand_image: {
      src: "/aliados/extra_brut.png",
      alt: "Extra Brut Construir Mejor",
      width: 170,
      height: 100,
    },
    title: "vivienda los teros",
    technology: "Sistema S.I.P",
    city: "Guaymallen, Mendoza",
    href: "",
  },
];

const second_row_obras = [
  {
    key: "third_obra",
    hero_image: {
      src: "/obra_1.png",
      alt: "sistema SIP",
      width: 170,
      height: 100,
    },
    brand_image: {
      src: "/aliados/extra_brut.png",
      alt: "Extra Brut Construir Mejor",
      width: 170,
      height: 100,
    },
    title: "vivienda los teros",
    technology: "Sistema S.I.P",
    city: "Guaymallen, Mendoza",
    href: "",
  },
  {
    key: "fourth_obra",
    hero_image: {
      src: "/obra_1.png",
      alt: "sistema SIP",
      width: 170,
      height: 100,
    },
    brand_image: {
      src: "/aliados/extra_brut.png",
      alt: "Extra Brut Construir Mejor",
      width: 170,
      height: 100,
    },
    title: "vivienda los teros",
    technology: "Sistema S.I.P",
    city: "Guaymallen, Mendoza",
    href: "",
  },
];

const ObrasWrapper = () => {
  return (
    <Layout title="Ciclo" description="Nuestras Obras">
      <MaxContainer>
        <div className={styles.container}>
          <div>
            {first_row_obras.map((obra) => (
              <div key={obra.key}>
                <Obra {...obra} />
              </div>
            ))}
          </div>
          <div>
            {second_row_obras.map((obra) => (
              <div key={obra.key}>
                <Obra {...obra} />
              </div>
            ))}
          </div>
        </div>
      </MaxContainer>
    </Layout>
  );
};

ObrasWrapper.displayName = 'ObrasWrapper';
export default ObrasWrapper;
