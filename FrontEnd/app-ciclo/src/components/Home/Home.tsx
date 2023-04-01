import Layout from "@/components/Layout/Layout";
import { MaxContainer } from "@/components/mixins";
import styles from "./home.module.scss";

function Home() {
  return (
    <Layout
      title="Ciclo"
      description="Somos un equipo joven. interdisciplinario y comprometido con los desafíos que plantea la industria de la construcción"
    >
      <MaxContainer>
        <h1>Hola Mundo desde Home component</h1>
      </MaxContainer>
    </Layout>
  );
}

export default Home;
