import { useState, useEffect, useCallback } from "react";
import { Form, Select, Message, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { formatValue } from "@/utils/utils";
import styles from "./formunirme.module.scss";
import api from "../../api";
import { Input, Text } from "../mixins";

type city = {
  id: string;
};

interface UseFormInputs {
  name: string;
  areaCode: string;
  phoneNumber: string;
  email: string;
  terms: boolean;
  occupation: string;
  city: city;
}

const defaultValues: UseFormInputs = {
  name: "",
  areaCode: "",
  phoneNumber: "",
  email: "",
  terms: false,
  occupation: "",
  city: { id: "" },
};

const FormUnirme = (props: any) => {
  const { handleSuccessResponse } = props;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorHeader, setErrorHeader] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<any>({});
  const [states, setStates] = useState([
    { key: "MZA", text: "Mendoza", value: "4" },
  ]);
  const [cities, setCities] = useState([]);

  const [formValues, setFormValues] = useState<UseFormInputs>(defaultValues);
  const { register, handleSubmit, setValue, reset } = useForm<UseFormInputs>({
    defaultValues: defaultValues,
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    if (!data.terms || !data.city?.id) {
      let errors: any = {};
      data.terms
        ? ""
        : (errors["terms"] = "Debe aceptar los terminos y condiciones");
      data.city?.id
        ? ""
        : (errors["city_id"] = "Debe seleccionar una Localidad");

      setError(true);
      setSuccess(false);
      setFormErrors(errors);
    } else {
      data.phoneNumber = `(${data.areaCode}) ${data.phoneNumber}`;
      const response = await api.formCommunities.create(data);
      if (response.success) {
        setError(false);
        setSuccess(true);
        setFormErrors({});
        setFormValues(defaultValues);
        reset();
        handleSuccessResponse("Ya sos Parte de la comunidad!");
      } else {
        setFormErrors(response.error);
        setError(true);
        setErrorMessage(response.data);
      }
    }
    setLoading(false);
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

  const handleChange = (type: any, value: any) => {
    let values: any = {};
    values[`${type}`] = formatValue(type, value);
    setValue(type, value);
    setFormValues({ ...formValues, ...values });
  };

  const handleSelectChange = (value: string) => {
    setFormValues({ ...formValues, ...{ city: { id: value } } });
    setValue("city.id", value);
  };

  const handleCheckChange = (value: any) => {
    setFormValues({ ...formValues, ...{ terms: value } });
    setValue("terms", value);
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
            <input className={styles.circular_labeled_input} />
          </Form.Input>
          <Form.Input
            fluid
            required
            label="Teléfono sin 15"
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
            <input className={styles.circular_labeled_input} />
          </Form.Input>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="E-mail"
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
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            required
            label="Elija una Provincia"
            options={states}
            placeholder="Mendoza"
            defaultValue={4}
            className={styles.dropdown}
          />

          <Form.Select
            fluid
            required
            control={Select}
            label="Elija una Localidad"
            options={cities}
            placeholder="Elija una Localidad"
            value={formValues.city.id}
            className={styles.dropdown}
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
          {...register("occupation")}
          value={formValues.occupation}
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
        {(errorHeader || errorMessage) && (
          <Message error header={errorHeader} content={errorMessage} />
        )}
        <Form.Button
          content="Quiero Unirme"
          circular
          color="pink"
          className={styles.button}
          loading={loading}
        />
      </Form>
    </div>
  );
};

FormUnirme.displayName = "FormUnirme";
export default FormUnirme;
