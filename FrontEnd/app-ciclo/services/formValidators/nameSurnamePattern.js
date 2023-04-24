const nameSurnamePatter = (name) => {
  const isValid = name?.match(
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  );
  const errorMessage = 'Ingresa un nombre válido';

  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default nameSurnamePatter;
