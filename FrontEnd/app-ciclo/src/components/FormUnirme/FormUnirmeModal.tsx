import { useState, useEffect, useCallback } from "react";
import { Form, Select, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import styles from "./formunirmemodal.module.scss";
import api from "../../api";

const FormUnirmeModal = (props: any) => {
  const { stateChanger } = props;
  const { register, handleSubmit, setValue, reset } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorHeader, setErrorHeader] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<any>({});
  const [states, setStates] = useState([
    { key: "MZA", text: "Mendoza", value: "4" },
  ]);
  const [cities, setCities] = useState([]);

  const onSubmit = async (data: any) => {
    if (!data.terms || !data.city_id) {
      let errors: any = {};
      data.terms
        ? ""
        : (errors["terms"] = "Debe aceptar los terminos y condiciones");
      data.city_id ? "" : (errors["city_id"] = "Debe seleccionar una Ciudad");

      setError(true);
      setSuccess(false);
      setFormErrors(errors);
    } else {
      const response = await api.formCommunities.create(data);
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
    }
  };

  const handleClose = () => {
    reset();
    setSuccess(false);
    setIsOpen(false);
    stateChanger(false);
  };

  const fetchData = useCallback(async () => {
    const response = await api.states.getById("4"); // Por el momento solo mendoza
    const statesData = [
      {
        key: response.data.abbreviation,
        text: response.data.name,
        value: response.data.id,
      },
    ];

    const citiesData = response.data.cities.map((city: any) => {
      return {
        key: city.abbreviation,
        text: city.name,
        value: city.id,
      };
    });
    setStates(statesData);
    setCities(citiesData);
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData, formErrors]);

  const handleSelectChange = (value: any) => {
    setValue("city_id", value); // Set the value of the "projectType" field
  };

  const handleCheckChange = (evt: any, value: any) => {
    setValue("terms", value.checked); // Set the value of the "projectType" field
  };

  const handleChange = (type: string, value: any) => {
    setValue(type, value);
  };
  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => handleClose()}></div>
      <Form onSubmit={handleSubmit(onSubmit)} success={success} error={error}>
        <Form.Input
          fluid
          required
          label="Nombre y Apellido"
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
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="Teléfono"
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
            label="E-mail"
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
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            required
            label="Elija una Provincia"
            options={states}
            placeholder="Mendoza"
            defaultValue={4}
          />

          <Form.Select
            fluid
            required
            control={Select}
            label="Elija una Localidad"
            options={cities}
            placeholder="Godoy Cruz"
            error={
              formErrors["city_id"] && {
                content: formErrors["city_id"],
                point: "below",
              }
            }
            onChange={(e: any, { value }: any) => handleSelectChange(value)} // Pass the selected value to the handler function
          />
        </Form.Group>
        <Form.Input
          fluid
          required
          label="Ocupación/Actividad"
          placeholder="Tecnico"
        />
        <Form.Field required>
          <label>
            Para formar parte de la <strong>Comunidad Ciclo</strong> debés
            contar con: título y/o certificación de actividad principal,
            experiencia laboral y residir en Mendoza.
          </label>
          <Form.Checkbox
            label="Sí, cumplo con los requisitos requeridos."
            {...register("terms")}
            error={
              formErrors["terms"] && {
                content: formErrors["terms"],
                point: "left",
              }
            }
            onChange={(evt, data) => handleCheckChange(evt, data)}
          />
        </Form.Field>
        <Message
          success
          header="Registrado con exito"
          content="Ya sos Parte de la comunidad!"
        />
        {(errorHeader || errorMessage) && (
          <Message error header={errorHeader} content={errorMessage} />
        )}
        <Form.Button content="Quiero Unirme" circular color="pink" />
      </Form>
    </div>
  ) : null;
};

FormUnirmeModal.displayName = "FormUnirmeModal";

export default FormUnirmeModal;
