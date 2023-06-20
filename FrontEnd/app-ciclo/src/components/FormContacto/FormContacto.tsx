import { useState } from "react";
import { Form, Select } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import styles from "./formcontacto.module.scss";
import api from "../../api";
const options = [
  { key: "1", text: "Construcción de cero", value: "CONSTRUCCION_DE_CERO" },
  { key: "2", text: "Remodelación", value: "REMODELACION" },
];

const FormContacto = (props: any) => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { stateChanger } = props;
  const [isOpen, setIsOpen] = useState(true);
  const onSubmit = async (data: any) => {
    const response = await api.formProjects.create(data);
    if (response.success) {
      reset();
    } else {
      alert(response);
    }
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
    stateChanger(false);
  };

  const handleSelectChange = (value: any) => {
    setValue("projectType", value); // Set the value of the "projectType" field
  };

  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => handleClose()}></div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field fluid required>
          <label htmlFor="name">NOMBRE Y APELLIDO</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Ciclo Soluciones Constructivas"
            required
          />
        </Form.Field>
        <Form.Field fluid required>
          <label htmlFor="name">TELÉFONO</label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
            placeholder="+549 261 276 5262"
            required
          />
        </Form.Field>
        <Form.Field fluid required>
          <label htmlFor="name">EMAIL</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="info@ciclosoluciones.com"
            required
          />
        </Form.Field>

        <Form.Select
          fluid
          required
          control={Select}
          label="INDICANOS EL TIPO DE PROYECTO"
          options={options}
          placeholder="Tipo de Proyecto"
          onChange={(e: any, { value }: any) => handleSelectChange(value)} // Pass the selected value to the handler function
        />
        <Form.Button content="Iniciar Proyecto" circular color="pink" />
      </Form>
    </div>
  ) : null;
};

FormContacto.displayName = "FormContacto";
export default FormContacto;
