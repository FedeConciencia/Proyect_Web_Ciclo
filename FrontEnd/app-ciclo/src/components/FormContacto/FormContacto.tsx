import { useState } from "react";
import { Form, Select, Message } from "semantic-ui-react";
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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<any>({});
  const onSubmit = async (data: any) => {
    const response = await api.formProjects.create(data);
    if (response.success) {
      setError(false);
      setSuccess(true);
      setFormErrors({});
      reset();
    } else {
      setFormErrors(response.error);
      setError(true);
      setErrorMessage(response.data);
    }
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
    stateChanger(false);
  };

  const handleChange = (type: string, value: any) => {
    setValue(type, value); // Set the value of the "projectType" field
  };

  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => handleClose()}></div>
      <Form onSubmit={handleSubmit(onSubmit)} success={success} error={error}>
        <Form.Input
          fluid
          required
          label="NOMBRE Y APELLIDO"
          placeholder="Ciclo Soluciones Constructivas"
          type="text"
          id="name"
          {...register("name")}
          error={
            formErrors["name"] && {
              content: formErrors["name"],
              point: "below",
            }
          }
          onChange={(e: any, { value }: any) => handleChange("name", value)}
        />
        <Form.Input
          fluid
          required
          label="TELÉFONO"
          placeholder="+549 261 276 5262"
          type="text"
          id="phoneNumber"
          {...register("phoneNumber")}
          error={
            formErrors["phoneNumber"] && {
              content: formErrors["phoneNumber"],
              point: "below",
            }
          }
          onChange={(e: any, { value }: any) =>
            handleChange("phoneNumber", value)
          }
        />

        <Form.Input
          fluid
          required
          label="EMAIL"
          placeholder="info@ciclosoluciones.com"
          type="email"
          id="email"
          {...register("email")}
          error={
            formErrors["email"] && {
              content: formErrors["email"],
              point: "below",
            }
          }
          onChange={(e: any, { value }: any) => handleChange("email", value)}
        />
        <Form.Select
          fluid
          required
          control={Select}
          label="INDICANOS EL TIPO DE PROYECTO"
          options={options}
          placeholder="Tipo de Proyecto"
          onChange={(e: any, { value }: any) =>
            handleChange("projectType", value)
          } // Pass the selected value to the handler function
        />
        <Form.Button content="Iniciar Proyecto" circular color="pink" />
        {success && (
          <Message
            success
            header="Registrado con exito"
            content="Pronto estaremos en contacto!"
          />
        )}
      </Form>
    </div>
  ) : null;
};

FormContacto.displayName = "FormContacto";
export default FormContacto;
