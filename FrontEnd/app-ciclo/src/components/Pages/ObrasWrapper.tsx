import Layout from "../Layout/Layout";
import { MaxContainer, Text } from "@/components/mixins";
import styles from "./obras.module.scss";
import Obra from "../Obra/Obra";
import { Button } from "semantic-ui-react";
import Image from "next/image";
import { useState } from "react";
import FormContacto from "../FormContacto/FormContacto";

const first_row_obras = [
  {
    key: "first_obra",
    hero_image: {
      src: "/ciclos/los_teros_img.png",
      alt: "sistema SIP",
      width: 570,
      height: 247,
    },
    brand_image: {
      src: "/ciclos/newpanel_brand_dark.png",
      alt: "Extra Brut Construir Mejor",
      width: 120,
      height: 45,
    },
    title: "vivienda los teros",
    technology: "Sistema S.I.P",
    city: "Guaymallen, Mendoza",
    href: "https://newpanel.com.ar/casa-en-los-teros/",
  },
  {
    key: "second_obra",
    hero_image: {
      src: "/ciclos/extrabrut_img.png",
      alt: "Steel Framing",
      width: 570,
      height: 247,
    },
    brand_image: {
      src: "/ciclos/extrabrut_brand_dark.png",
      alt: "Extra Brut Construir Mejor",
      width: 120,
      height: 45,
    },
    title: "vivienda unifamliar 2 plantas",
    technology: "Sistema Steel Framing",
    city: "Maipú, Mendoza",
    href: "",
  },
];

const second_row_obras = [
  {
    key: "third_obra",
    hero_image: {
      src: "/ciclos/ltn_img.png",
      alt: "Paneles Aislantes PUR",
      width: 570,
      height: 247,
    },
    brand_image: {
      src: "/ciclos/ltn_brand_dark.png",
      alt: "Extra Brut Construir Mejor",
      width: 120,
      height: 45,
    },
    title: "vivienda unifamiliar 1 planta",
    technology: "Paneles Aislantes PUR",
    city: "Lujan de Cuyo, Mendoza",
    href: "",
  },
  {
    key: "fourth_obra",
    hero_image: {
      src: "/ciclos/cassaforma_img.png",
      alt: "sistema Cassaforma",
      width: 570,
      height: 247,
    },
    brand_image: {
      src: "/ciclos/cassaforma_brand_dark.png",
      alt: "Sistema Cassaforma",
      width: 120,
      height: 45,
    },
    title: "vivienda unifamiliar 2 plantas",
    technology: "Sistema Cassaforma",
    city: "Godoy Cruz, Mendoza",
    href: "",
  },
];

const ObrasWrapper = () => {
  const [openContacto, setOpenContacto] = useState(false);

  return (
    <Layout title="Ciclo" description="Nuestras Obras">
      <MaxContainer>
        <div className={styles.hero}>
          <Image
            src={"/ciclos/obras_hero.jpg"}
            alt="Obras Realizadas"
            width={1920}
            height={700}
            priority
          />
          <div className={styles.hero_title}>
            <Text
              variant="h1"
              textCase="capitalize"
              colored
              textColor="#fff"
              textSize="xxxl"
              weight="medium"
            >
              Obras realizadas
            </Text>
            <Button
              color="pink"
              circular
              className={styles.hero__button}
              onClick={() => setOpenContacto(!openContacto)}
            >
              <Button.Content>Empezá tu Proyecto</Button.Content>
            </Button>
          </div>
        </div>
        {openContacto && <FormContacto stateChanger={setOpenContacto} />}

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

ObrasWrapper.displayName = "ObrasWrapper";
export default ObrasWrapper;
