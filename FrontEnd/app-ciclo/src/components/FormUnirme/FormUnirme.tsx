import { useState, useEffect, useCallback } from "react";
import { Form, Select, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import styles from "./formunirme.module.scss";
import api from "../../api";
import { Input, Text } from "../mixins";
const FormUnirme = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
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
    console.log("DATA", data);
    if (!data.terms || !data.city?.id) {
      let errors: any = {};
      data.terms
        ? ""
        : (errors["terms"] = "Debe aceptar los terminos y condiciones");
      data.city?.id ? "" : (errors["city_id"] = "Debe seleccionar una Ciudad");

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

  const handleChange = (type: string, value: any) => {
    setValue(type, value);
  };
  const handleSelectChange = (value: any) => {
    setValue("city.id", value); // Set the value of the "projectType" field
  };
  const handleCheckChange = (value: any) => {
    setValue("terms", value); // Set the value of the "projectType" field
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} success={success} error={error}>
        <Form.Input
          fluid
          required
          label="Nombre y Apellido"
          placeholder="Ciclo Soluciones Constructivas"
          type="text"
          id="name"
          circular
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
            circular
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
            circular
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
            circular
            className={styles.dropdown}
          />

          <Form.Select
            fluid
            required
            control={Select}
            label="Elija una Localidad"
            options={cities}
            placeholder="Godoy Cruz"
            circular
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
          type="text"
          id="occupation"
          circular
          {...register("occupation")}
          error={
            formErrors["occupation"] && {
              content: formErrors["occupation"],
              point: "below",
            }
          }
          onChange={(e: any, { value }: any) =>
            handleChange("occupation", value)
          }
        />

        <div className={styles.legend}>
          <Text variant="span" textColor="#ffffff" center textSize="s">
            Para formar parte de la <strong>Comunidad Ciclo</strong> debés
            contar con: título y/o certificación de actividad principal,
            experiencia laboral y residir en Mendoza.
          </Text>
        </div>
        <Input
          id="7"
          name="requirments"
          required
          label="Sí, cumplo con los requisitos requeridos."
          className="fullWidth"
          type="checkbox"
          filled
          labelColor="#ffffff"
          textSize="s"
          onChange={(evt: any) => handleCheckChange(evt.target.checked)}
        />
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
  );
};

FormUnirme.displayName = "FormUnirme";
export default FormUnirme;
