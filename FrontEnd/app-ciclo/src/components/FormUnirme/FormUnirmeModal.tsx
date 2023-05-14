import { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import styles from "./formunirmemodal.module.scss";
const options = [
  { key: "1", text: "Mendoza", value: "1" },
];

const FormUnirmeModal = (props: any) => {
  const { stateChanger } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    return console.log("Submitting");
  };

  const handleClose = () => {
    // TODO handle This to blank Formulario
    setIsOpen(false);
    stateChanger(false);
  };

  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => handleClose()}></div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          fluid
          required
          label="Nombre y Apellido"
          placeholder="Ciclo Soluciones Constructivas"
        />
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="Teléfono"
            placeholder="+549 261 276 5262"
          />
          <Form.Input
            fluid
            required
            label="e-mail"
            placeholder="info@ciclosoluciones.com"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            required
            label="Elija una Provincia"
            options={options}
            placeholder="Mendoza"
          />
          <Form.Select
            fluid
            required
            label="Elija una Localidad"
            options={options}
            placeholder="Godoy Cruz"
          />
        </Form.Group>
        <Form.Input
          fluid
          required
          label="Ocupación/Actividad"
          placeholder="Tecnico"
        />
        <Form.Field>
          <label>
            Para formar parte de la <strong>Comunidad Ciclo</strong> debés
            contar con: título y/o certificación de actividad principal,
            experiencia laboral y residir en Mendoza.
          </label>
          <Checkbox label="Sí, cumplo con los requisitos requeridos." />
        </Form.Field>
        <Form.Button content="Quiero Unirme" circular color="pink" />
      </Form>
    </div>
  ) : null;
};

FormUnirmeModal.displayName = "FormUnirmeModal";
export default FormUnirmeModal;
