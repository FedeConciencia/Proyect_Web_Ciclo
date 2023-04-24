const noOnlyNumbers = (value) => {
  const isValid = Number.isNaN(Number(value));
  const errorMessage = 'El campo no puede ser sólo números';
  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default noOnlyNumbers;
