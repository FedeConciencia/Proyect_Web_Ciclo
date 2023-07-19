export const FULL_NAME_PATTERN = "/[A-Za-z]/";
export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
export const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
export const regexPhone = /^\d+$/;

export const fullNameValidations = (
  type: string | undefined
): string | undefined => {
  switch (type) {
    case "required":
      return "Nombre es requerido";
    case "pattern":
      return "Debe escribir un nombre valido ej Jon Smith";
  }
};

export const emailValidations = (
  type: string | undefined
): string | undefined => {
  switch (type) {
    case "required":
      return "Email es requerido";
    case "pattern":
      return "Debe escribir un email valido ej mail@example.com";
  }
};

export const formatValue = (
  type: string | undefined,
  value: string | undefined
): string | undefined => {
  switch (type) {
    case "areaCode":
    case "phoneNumber":
      return value?.replace(/\D/g, "");
    case "name":
    case "occupation":
      return value
        ?.replace(/\d/g, "")
        ?.replace(/[^A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+/g, "");
    default:
      return value;
  }
};
