export default function validateExpirationDate(value) {
  let errorMessage = false;
  if (value.length > 3) {
    const month = Number(value.split('/')[0]);
    const year = Number(value.split('/')[1]);

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = Number(new Date().getFullYear().toString().substr(-2));

    if (month > 12 || month === 0) {
      errorMessage = 'Ingrese una fecha válida (mes)';
    }
    if (year < currentYear) {
      errorMessage = 'Ingrese una fecha válida (año)';
    }
    if (month > currentMonth && year < currentYear) {
      errorMessage = 'Ingrese una fecha válida (mes)';
    }
  }
  return !errorMessage ? { isValid: true } : { isValid: false, errorMessage };
}
