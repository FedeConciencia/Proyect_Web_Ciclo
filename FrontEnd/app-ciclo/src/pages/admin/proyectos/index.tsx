import { MaxContainer } from "@/components/mixins";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import Footer from "@/components/Footer/Footer";
import styles from "../styles.module.scss";
import proyectos from "./proyectos.module.scss";

import api from "../../../api";
import { useState, useEffect, useCallback } from "react";
import ExcelJS from "exceljs";

const project_types = {
  CONSTRUCCION_DE_CERO: "Construcción desde cero",
  REFACCION: "Refacción",
  REMODELACION: "Refacción",
  AMPLIACION: "Ampliación",
};

const generateExcel = (formProjects: any): any => {
  // Crear un nuevo libro de Excel
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Formulario Unite a la Comunidad");

  // Agregamos Titulos
  worksheet.columns = [
    { header: "Nombre", key: "name", width: 32 },
    { header: "Correo", key: "email", width: 32 },
    { header: "Telefono", key: "phoneNumber", width: 32, outlineLevel: 1 },
    {
      header: "Tipo de Proyecto",
      key: "projectType",
      width: 32,
      outlineLevel: 1,
    },
    {
      header: "Fecha de creacion",
      key: "createdAt",
      width: 42,
      outlineLevel: 1,
    },
  ];
  // Agregar datos a la hoja de cálculo (tabla)
  const data = formProjects.map((formProject) => {
    return [
      formProject.name,
      formProject.email,
      formProject.phoneNumber,
      project_types[formProject.projectType],
      formProject.createdAt,
    ];
  });
  worksheet.addRows(data);

  // Generar el archivo Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    // Crear un blob a partir del buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Crear un objeto URL para descargar el archivo
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace para descargar el archivo
    const a = document.createElement("a");
    a.href = url;
    a.download = "formularios_proyecto.xlsx";
    a.click();

    // Liberar el objeto URL
    window.URL.revokeObjectURL(url);
  });
};

const Proyectos = () => {
  const [formProjects, setFormProjects] = useState<any>([]);
  const [filtroFechaDesde, setFiltroFechaDesde] = useState<string>("");
  const [filtroFechaHasta, setFiltroFechaHasta] = useState<string>("");
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const elementosPorPagina = 10;

  // Aplicar filtro de búsqueda por fecha y paginación
  const filtrarPorFecha = async () => {
    // Formatear la fecha a 'yyyy-mm-dd'

    // Realizar llamada a la API para obtener los datos filtrados por fecha
    const datosFiltrados = await api.formProjects.getByDate(filtroFechaDesde);

    // Actualizar los datos de la tabla con los datos filtrados
    setFormProjects(datosFiltrados.data);
  };

  const cleanFecha = async () => {
    setFiltroFechaDesde("");
    setFiltroFechaHasta("");
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
  const numerosPaginas: any[] = [];
  for (let i = 1; i <= numeroTotalPaginas; i++) {
    numerosPaginas.push(i);
  }

  // Cambiar de página
  const cambiarPagina = (numeroPagina: any) => {
    setPaginaActual(numeroPagina);
  };

  const fetchData = useCallback(async () => {
    const responseProjects =
      filtroFechaDesde != "" && filtroFechaHasta != ""
        ? await api.formProjects.getByRangeDate(
            filtroFechaDesde,
            filtroFechaHasta
          )
        : await api.formProjects.getAll();

    setFormProjects(responseProjects.data);
  }, [filtroFechaDesde, filtroFechaHasta]);

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
                    <div>
                      <button onClick={() => generateExcel(formProjects)}>
                        Exportar Excel
                      </button>
                      Total inscriptos en Formulario Proyecto (
                      {formProjects?.length})
                    </div>
                  </th>
                  <th>
                    {!filtroFechaDesde &&
                      !filtroFechaHasta &&
                      "Todas las fechas"}
                    {filtroFechaDesde && `Desde: ${filtroFechaDesde}`}
                    <br></br>
                    {filtroFechaHasta && `Hasta: ${filtroFechaHasta}`}
                  </th>
                  <th>
                    Desde
                    <input
                      type="date"
                      value={filtroFechaDesde}
                      onChange={(e) => setFiltroFechaDesde(e.target.value)}
                    />
                    Hasta
                    <input
                      type="date"
                      value={filtroFechaHasta}
                      onChange={(e) => setFiltroFechaHasta(e.target.value)}
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
                      <td>{project_types[formProject.projectType]}</td>
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
