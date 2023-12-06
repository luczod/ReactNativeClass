import { removeSpecialChar } from './characters';

export const isValuesEmpty = (obj: object) => {
  let result = false;
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      result = true;
    }
  });
  return result;
};

export function validateCpf(cpf: string): boolean {
  const strCPF = removeSpecialChar(cpf);
  let sum: number;
  let rest: number;
  sum = 0;

  if (strCPF.length !== 11) {
    return false;
  }

  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  }
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  return rest === parseInt(strCPF.substring(10, 11), 10);
}

export const validatePhone = (phone: string): boolean => {
  const noMask = removeSpecialChar(phone);
  return noMask.length === 11 || noMask.length === 10;
};

export const validateEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
};
