import { MaxContainer } from "@/components/mixins";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import Footer from "@/components/Footer/Footer";
import styles from "../styles.module.scss";
import comunidad from "./comunidad.module.scss";

import api from "../../../api";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import ExcelJS from "exceljs";

const generateExcel = (formCommunities: any): any => {
  // Crear un nuevo libro de Excel
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Formulario Unite a la Comunidad");

  // Agregamos Titulos
  worksheet.columns = [
    { header: "Nombre", key: "name", width: 32 },
    { header: "Correo", key: "email", width: 32 },
    { header: "Telefono", key: "phoneNumber", width: 32, outlineLevel: 1 },
    { header: "Ciudad", key: "city", width: 32, outlineLevel: 1 },
    { header: "Ocupacion", key: "occupation", width: 32, outlineLevel: 1 },
    {
      header: "Fecha de creacion",
      key: "createdAt",
      width: 42,
      outlineLevel: 1,
    },
  ];
  // Agregar datos a la hoja de cálculo (tabla)
  const data = formCommunities.map((formCommunity) => {
    return [
      formCommunity.name,
      formCommunity.email,
      formCommunity.phoneNumber,
      `${formCommunity.city.name} - ${formCommunity.city.zipCode}`,
      formCommunity.occupation,
      formCommunity.createdAt,
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
    a.download = "formularios_comunidad.xlsx";
    a.click();

    // Liberar el objeto URL
    window.URL.revokeObjectURL(url);
  });
};

const Proyectos = () => {
  const [formCommunities, setFormCommunities] = useState<any>([]);
  const [filtroFechaDesde, setFiltroFechaDesde] = useState<string>("");
  const [filtroFechaHasta, setFiltroFechaHasta] = useState<string>("");
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const elementosPorPagina = 10;

  // Aplicar filtro de búsqueda por fecha y paginación
  const filtrarPorFecha = async () => {
    // Formatear la fecha a 'yyyy-mm-dd'

    // Realizar llamada a la API para obtener los datos filtrados por fecha
    const datosFiltrados = await api.formCommunities.getByDate(
      filtroFechaDesde
    );

    // Actualizar los datos de la tabla con los datos filtrados
    setFormCommunities(datosFiltrados.data);
  };

  const cleanFecha = async () => {
    setFiltroFechaDesde("");
    setFiltroFechaHasta("");
    const datosFiltrados = await api.formCommunities.getAll();

    setFormCommunities(datosFiltrados.data);
  };
  // Calcular índices para la paginación
  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const elementosPaginaActual = formCommunities.slice(
    indicePrimerElemento,
    indiceUltimoElemento
  );

  // Obtener el número total de páginas
  const numeroTotalPaginas = Math.ceil(
    formCommunities.length / elementosPorPagina
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
        ? await api.formCommunities.getByRangeDate(
            filtroFechaDesde,
            filtroFechaHasta
          )
        : await api.formCommunities.getAll();

    setFormCommunities(responseProjects.data);
  }, [filtroFechaDesde, filtroFechaHasta]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <>
      <AdminNavbar />
      <div className={comunidad.container}>
        <MaxContainer>
          <div className={styles.ciclo__table}>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <div>
                      <button onClick={() => generateExcel(formCommunities)}>
                        Exportar Excel
                      </button>
                      Total inscriptos en Formulario Comunidad (
                      {formCommunities?.length}){" "}
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
                  <th>Localidad</th>
                  <th>Ocupación</th>
                </tr>
              </thead>
              <tbody>
                {formCommunities &&
                  elementosPaginaActual.map(
                    (formCommunity: any, index: any) => (
                      <tr key={formCommunity.id}>
                        <td>{index + 1}</td>
                        <td>{formCommunity.name}</td>
                        <td>{formCommunity.phoneNumber}</td>
                        <td>{formCommunity.email}</td>
                        <td>
                          {formCommunity.city
                            ? `${formCommunity.city.name} - ${formCommunity.city.zipCode}`
                            : ""}
                        </td>
                        <td>{formCommunity.occupation}</td>
                      </tr>
                    )
                  )}
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
                disabled={indiceUltimoElemento >= formCommunities.length}
                onClick={() => cambiarPagina(paginaActual + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>
        </MaxContainer>
      </div>
      <Footer />
    </>
  );
};

Proyectos.displayName = "Proyectos";
export default Proyectos;
