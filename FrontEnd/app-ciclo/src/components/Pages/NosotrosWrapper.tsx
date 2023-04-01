import Layout from "../Layout/Layout";
import { MaxContainer } from "@/components/mixins";
import Image from "next/image";

const NosotrosWrapper = () => {
  return (
    <Layout title="Ciclo" description="Sobre Nosotros">
      <MaxContainer>
        <Image
          src={"/nosotros_hero.jpg"}
          alt="Unite a la comunidad"
          width={1440}
          height={700}
          priority
        ></Image>
        <h1>Hola Mundo desde Nosotros component</h1>
      </MaxContainer>
    </Layout>
  );
};

export default NosotrosWrapper;
