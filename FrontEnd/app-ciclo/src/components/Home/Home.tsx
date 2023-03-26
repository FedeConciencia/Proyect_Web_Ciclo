import Layout from "@/components/Layout/Layout";
import MaxContainer from "../mixins/MaxContainer/MaxContainer";

function Home() {
  return (
    <Layout title="Proyecto_Ciclo" description="Proyecto Web Pagina Ciclo">
      <MaxContainer>
      <h1>Hola Mundo desde Home component</h1>
      </MaxContainer>
    </Layout>
  );
}

export default Home;
