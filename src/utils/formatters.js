import {formatCurrency} from '@brazilian-utils/brazilian-utils';
// import generator from 'generate-password';
// import latinize from 'latinize';
// import * as slugify from 'slugify';

export function toCurrency(valueInCents = 0) {
  return `R$ ${formatCurrency(valueInCents / 100)}`;
}

// export function slugifyText(text) {
//   const suffix = generator.generate({
//     length: 6,
//     numbers: true,
//     uppercase: false,
//   });

//   return `${slugify(latinize(text))}-${suffix}`;
// }

export const maskCpf = (v) => {
  v = v.replace(/\D/g, "")

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  } else {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
  }

  return v
}

export const maskCep = (v) => {
  v = v.replace(/\D/g, "")

    v = v.replace(/(\d{3})(\d{2,3})$/, "$1-$2")

  return v
}

export const maskCard = (v) => {
    v = v.replace(/\D/g,""); // Permite apenas dígitos
    v = v.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
    v = v.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
    v = v.substring(0, 19)// Limita o tamanho

  return v
}

export const formatarMoeda = (valor) => {

  valor = valor + '';
  valor = parseInt(valor.replace(/[\D]+/g, ''));
  valor = valor + '';
  valor = valor.replace(/([0-9]{2})$/g, ",$1");

  if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  }
  if(valor === 'NaN'){
    return '';
  } 

  return `R$ ${valor}`
}

export const masks = {
  cpfMask: [
    /[0-9]/, /\d/, /\d/, '.',
    /[0-9]/, /\d/, /\d/, '.',
    /[0-9]/, /\d/, /\d/, '-',
    /\d/, /\d/,
  ],

  cnpjMask: [
    /[0-9]/, /\d/, '.',
    /[0-9]/, /\d/, /\d/, '.',
    /[0-9]/, /\d/, /\d/, '/',
    /[0-9]/, /\d/, /\d/, /\d/, '-',
    /\d/, /\d/,
  ],

  dateMask: [
    /[0-1]/, /[0-9]/, '/',
    /[1-9]/, /[0-9]/, /[1-9]/, /[0-9]/,
  ],
  cellPhoneMask: [
    '(', /[1-9]/, /\d/, ')',
    ' ', /\d/, /\d/, /\d/, /\d/,
    /\d/, '-', /\d/, /\d/, /\d/,
    /\d/, /\d/, /\d/, /\d/, /\d/,
  ],
  cardNumber: [
    /\d/, /\d/, /\d/, /\d/,
    ' ', /\d/, /\d/, /\d/,
    /\d/, ' ', /\d/, /\d/,
    /\d/, /\d/, ' ', /\d/,
    /\d/, /\d/, /\d/, ' ',
    /\d/, /\d/, /\d/, /\d/,
  ],
  postalCodeMask: [
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
    /[0-9]/, '-', /[0-9]/, /[0-9]/,
    /[0-9]/,
  ],
  securityCodeMask: [
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
  ],
  houseNumber: [
    /[A-Za-z0-9]/, /[A-Za-z0-9]/,
    /[A-Za-z0-9]/, /[A-Za-z0-9]/,
    /[A-Za-z0-9]/, /[A-Za-z0-9]/,
  ],
};
