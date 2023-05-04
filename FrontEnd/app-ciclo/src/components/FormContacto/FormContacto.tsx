import { useState } from "react";
import { Form, Input, Label } from "semantic-ui-react";
import styles from "./formcontacto.module.scss";
const options = [{ key: "1", text: "Construcción de cero", value: "1" }];

const FormContacto = (props: any) => {
  const { stateChanger } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
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
          label="NOMBRE Y APELLIDO"
          placeholder="Ciclo Soluciones Constructivas"
        />
        <Form.Input
          fluid
          required
          label="TELÉFONO"
          placeholder="+549 261 276 5262"
        />
        <Form.Input
          fluid
          required
          label="EMAIL"
          placeholder="info@ciclosoluciones.com"
        />
        <Form.Select
          fluid
          required
          label="INDICANOS EL TIPO DE PROYECTO"
          options={options}
          placeholder="Tipo de Proyecto"
        />
        <Form.Button content="Iniciar Proyecto" circular color="pink" />
      </Form>
    </div>
  ) : null;
};

FormContacto.displayName = "FormContacto";
export default FormContacto;
