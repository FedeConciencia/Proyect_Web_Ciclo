import { useState, useEffect, useCallback } from "react";
import { Form, Select, Message, Input, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { formatValue } from "@/utils/utils";
import styles from "./formunirmemodal.module.scss";
import api from "../../api";

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

const FormUnirmeModal = (props: any) => {
  const { stateChanger, handleSuccessResponse } = props;
  const [isOpen, setIsOpen] = useState(true);
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
  const onSubmit = async (data: UseFormInputs) => {
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

  const handleSelectChange = (value: string) => {
    setFormValues({ ...formValues, ...{ city: { id: value } } });
    setValue("city.id", value);
  };

  const handleCheckChange = (evt: any, value: any) => {
    setFormValues({ ...formValues, ...{ terms: value.checked } });
    setValue("terms", value.checked);
  };

  const handleChange = (type: any, value: any) => {
    let values: any = {};
    values[`${type}`] = formatValue(type, value);
    setValue(type, value);
    setFormValues({ ...formValues, ...values });
    // validateForm(type);
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
          />

          <Form.Select
            fluid
            required
            control={Select}
            label="Elija una Localidad"
            options={cities}
            placeholder="Localidad"
            value={formValues.city.id}
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
          value={formValues.occupation}
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
        <Form.Field required>
          <label>
            Para formar parte de la <strong>Comunidad Ciclo</strong> debés
            contar con: título y/o certificación de actividad principal,
            experiencia laboral y residir en Mendoza.
          </label>
          <Form.Checkbox
            label="Sí, cumplo con los requisitos requeridos."
            checked={formValues.terms}
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
        <Form.Button
          content="Quiero Unirme"
          circular
          color="pink"
          loading={loading}
        />
      </Form>
    </div>
  ) : null;
};

FormUnirmeModal.displayName = "FormUnirmeModal";

export default FormUnirmeModal;
