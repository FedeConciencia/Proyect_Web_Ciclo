import React, { useState, useEffect } from "react";
import { Form, Select, Message, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { formatValue } from "@/utils/utils";
import styles from "./formcontacto.module.scss";
import api from "../../api";

const options = [
  { key: "1", text: "Construcción de cero", value: "CONSTRUCCION_DE_CERO" },
  // { key: "2", text: "Remodelación", value: "REMODELACION" },
  { key: "3", text: "Refacción", value: "REFACCION" },
  { key: "4", text: "Ampliación", value: "AMPLIACION" },
];

interface UseFormInputs {
  name: string;
  areaCode: string;
  phoneNumber: string;
  email: string;
  projectType: string;
}
const defaultValues: UseFormInputs = {
  name: "",
  phoneNumber: "",
  areaCode: "",
  email: "",
  projectType: "",
};

const FormContacto = (props: any) => {
  const [formValues, setFormValues] = useState<UseFormInputs>(defaultValues);
  const { register, handleSubmit, setValue, reset } = useForm<UseFormInputs>({
    defaultValues: defaultValues,
  });
  const { stateChanger, handleSuccessResponse } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<any>({});
  const onSubmit = async (data: any) => {
    setLoading(true);
    data.phoneNumber = `(${data.areaCode}) ${data.phoneNumber}`;
    const response = await api.formProjects.create(data);
    if (!data.projectType) {
      let errors: any = {};
      data.projectType
        ? ""
        : (errors["projectType"] = "Debe indicar el tipo de proyecto");

      setError(true);
      setSuccess(false);
      setFormErrors(errors);
    } else {
      if (response.success) {
        setError(false);
        setSuccess(true);
        setFormErrors({});
        setFormValues(defaultValues);
        reset();
        handleSuccessResponse("Pronto estaremos en contacto!");
        handleClose();
      } else {
        setFormErrors(response.error);
        setError(true);
        setErrorMessage(response.data);
      }
    }
    setLoading(false);
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
    stateChanger(false);
  };

  const handleChange = (type: any, value: any) => {
    let values: any = {};
    values[`${type}`] = formatValue(type, value);
    setValue(type, value);
    setFormValues({ ...formValues, ...values });
  };

  useEffect(() => {}, [formErrors]);

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
          value={formValues.name}
          {...register("name")}
          error={
            formErrors["name"] && {
              content: formErrors["name"],
              point: "below",
            }
          }
          onChange={(e: any, { value }: any) => handleChange("name", value)}
        />
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="Prefijo sin 0"
            placeholder="261"
            type="text"
            id="areaCode"
            value={formValues.areaCode}
            {...register("areaCode")}
            error={
              formErrors["areaCode"] && {
                content: formErrors["areaCode"],
                point: "below",
              }
            }
            onChange={(e: any, { value }: any) =>
              handleChange("areaCode", value)
            }
          >
            <Label className={styles.labeled}>0</Label>
            <input />
          </Form.Input>
          <Form.Input
            fluid
            required
            label="Numero sin 15"
            placeholder="2765262"
            type="text"
            id="phoneNumber"
            value={formValues.phoneNumber}
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
          >
            <Label className={styles.labeled}>15</Label>
            <input />
          </Form.Input>
        </Form.Group>

        <Form.Input
          fluid
          required
          label="EMAIL"
          placeholder="info@ciclosoluciones.com"
          type="email"
          id="email"
          value={formValues.email}
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
          value={formValues.projectType}
          onChange={(e: any, { value }: any) =>
            handleChange("projectType", value)
          } // Pass the selected value to the handler function
          error={
            formErrors["projectType"] && {
              content: formErrors["projectType"],
              point: "below",
            }
          }
        />
        {success && (
          <Message
            success
            header="Registrado con exito"
            content="Pronto estaremos en contacto!"
          />
        )}
        <Form.Button
          content="Iniciar Proyecto"
          circular
          color="pink"
          loading={loading}
        />
      </Form>
    </div>
  ) : null;
};

FormContacto.displayName = "FormContacto";
export default FormContacto;
