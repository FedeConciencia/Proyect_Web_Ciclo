import api from "../../api";
import { useState, useEffect, useCallback } from "react";
import { Table, Label, Menu } from "semantic-ui-react";

export default function Admin() {
  const [formCommunities, setFormCommunities] = useState<any>([]);
  const [communityIndex, setCommunityIndex] = useState<number>(0);
  const [formProjects, setFormProjects] = useState<any>([]);
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const FormCommunityRow = (formCommunity: any) => {
    const city = formCommunity.city
      ? `${formCommunity.city.name} - ${formCommunity.city.zipCode}`
      : "";
    return (
      <Table.Row key={formCommunity.id}>
        <Table.Cell>{formCommunity.name}</Table.Cell>
        <Table.Cell>{formCommunity.phoneNumber}</Table.Cell>
        <Table.Cell>{formCommunity.email}</Table.Cell>
        <Table.Cell>{city}</Table.Cell>
        <Table.Cell>{formCommunity.occupation}</Table.Cell>
      </Table.Row>
    );
  };

  const FormCommunity = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Total inscriptos en Formulario Comunidad (
              {formCommunities?.length}){" "}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Telefono</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Localidad</Table.HeaderCell>
            <Table.HeaderCell>Ocupación</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* TODO: PAGINAR DESDE EL BACKEND */}
          {formCommunities &&
            formCommunities
              .slice(communityIndex * 5, communityIndex * 5 + 5)
              .map((formCommunity: any) => FormCommunityRow(formCommunity))}
        </Table.Body>
        <Table.Footer>
          {FormPagination(
            formCommunities?.length,
            setCommunityIndex,
            communityIndex
          )}
        </Table.Footer>
      </Table>
    );
  };

  const FormProjectRow = (formProject: any) => {
    return (
      <Table.Row key={formProject.id}>
        <Table.Cell>{formProject.name}</Table.Cell>
        <Table.Cell>{formProject.phoneNumber}</Table.Cell>
        <Table.Cell>{formProject.email}</Table.Cell>
        <Table.Cell>{formProject.projectType}</Table.Cell>
      </Table.Row>
    );
  };

  const FormProject = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Total inscriptos en Formulario Proyecto ({formProjects?.length}){" "}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Telefono</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Proyecto</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* TODO: PAGINAR DESDE EL BACKEND */}
          {formProjects &&
            formProjects
              .slice(projectIndex * 5, projectIndex * 5 + 5)
              .map((formProject: any) => FormProjectRow(formProject))}
        </Table.Body>
        <Table.Footer>
          {FormPagination(formProjects?.length, setProjectIndex, projectIndex)}
        </Table.Footer>
      </Table>
    );
  };

  const FormPagination = (
    length: number,
    setter: any,
    currentIndex: number
  ) => {
    const pages = Math.ceil(length / 5);
    return (
      <Table.Row>
        <Table.HeaderCell colSpan="5">
          <Menu floated="right" pagination>
            {Array.from({ length: pages }, (_, index) => {
              return (
                <Menu.Item
                  as="a"
                  onClick={() => {
                    setter(index);
                  }}
                  active={index === currentIndex ? true : false}
                  key={`${_}_${index}`}
                >
                  {index + 1}
                </Menu.Item>
              );
            })}
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    );
  };
  const fetchData = useCallback(async () => {
    const responseCommunities = await api.formCommunities.getAll();
    const responseProjects = await api.formProjects.getAll();

    setFormCommunities(responseCommunities.data);
    setFormProjects(responseProjects.data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  useEffect(() => {}, [communityIndex]);
  useEffect(() => {}, [projectIndex]);

  return (
    <div>
      {formCommunities && FormCommunity()} {formProjects && FormProject()}
    </div>
  );
}
