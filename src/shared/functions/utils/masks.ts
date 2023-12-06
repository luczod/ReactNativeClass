// CPF
export const insertMaskInCpf = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

// PHONE
export const insertMaskInPhone = (phone: string) => {
  const noMask = phone.replace(/\D/g, '');
  return noMask
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(noMask.length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
};
