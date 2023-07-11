import { MaxContainer } from "@/components/mixins";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import Footer from "@/components/Footer/Footer";
import styles from "../styles.module.scss";
import proyectos from "./proyectos.module.scss";

import api from "../../../api";
import { useState, useEffect, useCallback } from "react";
import { height } from "@mui/system";

const Proyectos = () => {
  const [formProjects, setFormProjects] = useState<any>([]);
  const [filtroFecha, setFiltroFecha] = useState<string>("");
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const elementosPorPagina = 10;

  // Aplicar filtro de búsqueda por fecha y paginación
  const filtrarPorFecha = async () => {
    // Formatear la fecha a 'yyyy-mm-dd'

    // Realizar llamada a la API para obtener los datos filtrados por fecha
    const datosFiltrados = await api.formProjects.getByDate(filtroFecha);

    // Actualizar los datos de la tabla con los datos filtrados
    setFormProjects(datosFiltrados.data);
  };

  const cleanFecha = async () => {
    setFiltroFecha("");
    const datosFiltrados = await api.formProjects.getAll();

    setFormProjects(datosFiltrados.data);
  };
  // Calcular índices para la paginación
  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const elementosPaginaActual = formProjects.slice(
    indicePrimerElemento,
    indiceUltimoElemento
  );

  // Obtener el número total de páginas
  const numeroTotalPaginas = Math.ceil(
    formProjects.length / elementosPorPagina
  );

  // Crear un array de números de página
  const numerosPaginas = [];
  for (let i = 1; i <= numeroTotalPaginas; i++) {
    numerosPaginas.push(i);
  }

  // Cambiar de página
  const cambiarPagina = (numeroPagina: any) => {
    setPaginaActual(numeroPagina);
  };

  const fetchData = useCallback(async () => {
    const responseProjects =
      filtroFecha != ""
        ? await api.formProjects.getByDate(filtroFecha)
        : await api.formProjects.getAll();

    setFormProjects(responseProjects.data);
  }, [filtroFecha]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div>
      <AdminNavbar />
      <div className={proyectos.container}>
        <MaxContainer>
          <div className={styles.ciclo__table}>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    Total inscriptos en Formulario Proyecto (
                    {formProjects?.length}){" "}
                  </th>
                  <th>
                    Fecha Seleccionada:{" "}
                    {filtroFecha != "" ? filtroFecha : "Todas"}
                  </th>{" "}
                  <th>
                    <input
                      type="date"
                      value={filtroFecha}
                      onChange={(e) => setFiltroFecha(e.target.value)}
                    />
                  </th>
                  <th>
                    <button onClick={cleanFecha}>Borrar filtro</button>
                  </th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Tipo de Proyecto</th>
                </tr>
              </thead>
              <tbody>
                {formProjects &&
                  elementosPaginaActual.map((formProject: any, index: any) => (
                    <tr key={formProject.id}>
                      <td>{index + 1}</td>
                      <td>{formProject.name}</td>
                      <td>{formProject.phoneNumber}</td>
                      <td>{formProject.email}</td>
                      <td>{formProject.projectType}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className={styles.paginador}>
              <button
                disabled={paginaActual === 1}
                onClick={() => cambiarPagina(paginaActual - 1)}
              >
                Anterior
              </button>
              {/* Mostrar números de página */}
              {numerosPaginas.map((numeroPagina) => (
                <button
                  key={numeroPagina}
                  className={
                    paginaActual === numeroPagina
                      ? styles.paginaActual
                      : styles.notActualPage
                  }
                  onClick={() => cambiarPagina(numeroPagina)}
                >
                  {numeroPagina}
                </button>
              ))}
              <button
                disabled={indiceUltimoElemento >= formProjects.length}
                onClick={() => cambiarPagina(paginaActual + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>
        </MaxContainer>
      </div>
      <Footer />
    </div>
  );
};

Proyectos.displayName = "Proyectos";
export default Proyectos;
