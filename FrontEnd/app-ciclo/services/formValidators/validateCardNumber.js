import getCreditCardType from '@/utils/getCreditCardType';

export default function validateCardNumber(value, installments) {
  let errorMessage = false;
  const cardNumber = value.replace(/ /g, '');
  const cardObj = getCreditCardType(cardNumber)[0] || null;
  let cardBrand = null;

  if (cardObj !== null) {
    const { type } = cardObj;
    // eslint-disable-next-line prefer-destructuring
    cardBrand = type.split('-')[1];
  } else {
    cardBrand = null;
  }
  const cardNumberLength = cardNumber?.toString().length;

  if (cardBrand !== null && installments.length === 0) {
    return { isValid: true };
  }

  if (
    (cardBrand === 'maestro' && cardNumberLength < 18) ||
    (cardBrand === 'amex' && cardNumberLength < 14) ||
    (cardBrand !== 'amex' && cardNumberLength < 16)
  ) {
    errorMessage = 'Ingresa el número completo de la tarjeta';
  }
  if (
    (!cardBrand && cardNumberLength > 6) ||
    (!installments?.[0]?.id && cardNumberLength > 6) ||
    installments?.[0]?.id === 0
  ) {
    errorMessage = 'Por el momento no operamos con esta tarjeta.';
  }

  return !errorMessage ? { isValid: true } : { isValid: false, errorMessage };
}
