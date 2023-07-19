import Layout from "../Layout/Layout";
import { MaxContainer, Text } from "@/components/mixins";
import { Button } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./nosotros.module.scss";
import FormUnirmeModal from "../FormUnirme/FormUnirmeModal";
import { useState } from "react";

const NosotrosWrapper = () => {
  const [openUnirme, setOpenUnirme] = useState(false);

  return (
    <Layout title="Ciclo" description="Sobre Nosotros" servicios={false}>
      <MaxContainer>
        <div className={styles.hero}>
          <Image
            src={"/ciclos/nosotros_hero.jpg"}
            alt="Unite a la comunidad"
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
              left
            >
              Somos un equipo joven, interdisciplinario y comprometido con los
              desafíos que plantea la industria de la construcción
            </Text>
            <Button
              color="pink"
              circular
              className={styles.hero__button}
              onClick={() => setOpenUnirme(!openUnirme)}
            >
              <Button.Content>Unite a la Comunidad</Button.Content>
            </Button>
          </div>
        </div>
        {openUnirme && <FormUnirmeModal stateChanger={setOpenUnirme} />}
        <div className={styles.container}>
          <div className={styles.about_us}>
            <div className={styles.wrapper}>
              <div className={styles.text_left}>
                <Text
                  variant="h2"
                  textCase="uppercase"
                  weight="bold"
                  textSize="xxl"
                  className={styles.text_title}
                >
                  TECLAB
                </Text>
                <Text
                  variant="span"
                  textCase="capitalize"
                  className={styles.text_span}
                >
                  CICLO obtiene un financiamiento como startup innovadora para
                  el sector de la construcción, el cual fue otorgado por la
                  línea “Mendoza TECLAB 2021”, iniciativa de la Agencia
                  Mendocina de Innovación, Ciencia y Tecnología de Mendoza
                  (AMICYT) y la Agencia Nacional de Promoción de la
                  Investigación, el Desarrollo Tecnológico y la Innovación
                  (AGENCIA I+D+i), la cual buscaba desarrollar proyectos de alto
                  impacto tecnológico en la provincia de Mendoza.
                </Text>

                <div className={styles.view_more_wrapper}>
                  <Link href="https://www.argentina.gob.ar/noticias/se-presento-el-mendoza-teclab-una-linea-de-financiamiento-para-soluciones-innovadoras-en#:~:text=La%20Agencia%20Nacional%20de%20Promoci%C3%B3n,una%20l%C3%ADnea%20de%20financiamiento%20que">
                    <Text
                      variant="span"
                      textSize="xs"
                      className={styles.view_more}
                      center
                    >
                      Leer Mas
                    </Text>
                  </Link>
                </div>
              </div>
              <div className={styles.image_right}>
                <Image
                  src={"/teclab.jpg"}
                  alt="TECLAB"
                  width={560}
                  height={350}
                  priority
                />
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text_left}>
                <Text
                  variant="h2"
                  textCase="uppercase"
                  textSize="xxl"
                  weight="bold"
                  className={styles.text_title}
                >
                  DESARROLLO EMPRENDEDOR
                </Text>
                <Text
                  variant="span"
                  textCase="capitalize"
                  className={styles.text_span}
                >
                  Con el objetivo de promover la participación de mujeres en
                  oficios vinculados al sector de la construcción, se brindaron
                  capacitaciones técnicas que permitieron el desarrollo de
                  nuevos oficios altamente demandados por el sector. A partir de
                  esta experiencia, Juana Santos, participante del programa
                  “Escuela de Montajistas”, de Academia LTN, comienza a
                  desarrollar su propio emprendimiento de montaje para la
                  construcción en seco, junto a otras compañeras.
                </Text>

                <div className={styles.view_more_wrapper}>
                  <Link href="https://ecocuyo.com/nota/145094/construcccion-en-seco-la-escuela-de-montajistas-de-grupo-ltn-ya-formo-36-especialistas-y-va-por-mas">
                    <Text
                      variant="span"
                      textSize="xs"
                      className={styles.view_more}
                      center
                    >
                      Leer Mas
                    </Text>
                  </Link>
                </div>
              </div>
              <div className={styles.image_right}>
                <Image
                  src={"/desarrollo_emprendedor.jpg"}
                  alt="Desarrollo Emprendedor"
                  width={560}
                  height={350}
                  priority
                />
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text_left}>
                <Text
                  variant="h2"
                  textCase="uppercase"
                  textSize="xxl"
                  weight="bold"
                  className={styles.text_title}
                >
                  Vinculación itu
                </Text>
                <Text
                  variant="span"
                  textCase="capitalize"
                  className={styles.text_span}
                >
                  Durante el 2022 se desarrolló una propuesta de formación
                  técnica para trabajadores de la construcción en Mendoza,
                  articulando acciones entre empresas locales, la UNCUYO y el
                  Colegio de Técnicos de Mendoza, teniendo por objetivo la
                  certificación de oficios vinculados al rubro. El programa
                  surge de la necesidad de profesionalizar oficios relacionados
                  a los nuevos métodos de construcción, con técnicas que
                  garanticen un servicio de alta calidad.
                </Text>
                <div className={styles.view_more_wrapper}>
                  <Link href="https://itu.uncuyo.edu.ar/sector-de-la-construccion-en-seco-se-interesaron-por-las-micro-credenciales-para-la-formacion-en-oficios">
                    <Text
                      variant="span"
                      textSize="xs"
                      className={styles.view_more}
                      center
                    >
                      Leer Mas
                    </Text>
                  </Link>
                </div>
              </div>
              <div className={styles.image_right}>
                <Image
                  src={"/vinculacion_itu.jpg"}
                  alt="VINCULACIÓN ITU"
                  width={560}
                  height={350}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </Layout>
  );
};

NosotrosWrapper.displayName = "NosotrosWrapper";
export default NosotrosWrapper;
