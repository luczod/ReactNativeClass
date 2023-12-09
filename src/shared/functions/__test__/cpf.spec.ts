import { validateCpf } from '../utils';
import { insertMaskInCpf } from '../utils/masks';
import { describe, expect, it } from 'vitest';

describe('CPF', () => {
  const CPF_INVALID = '12345678900';

  it('should insert mask in cpf', () => {
    const CPF_WITH_MASK = '123.456.789-00';

    expect(CPF_WITH_MASK).toEqual(insertMaskInCpf(CPF_INVALID));
  });

  it('should invalid cpf', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID));
  });

  it('should invalid cpf in all zero', () => {
    const CPF_ZERO = '00000000000';

    expect(false).toEqual(validateCpf(CPF_ZERO));
  });

  it('should invalid cpf in lentth != 11', () => {
    const CPF_SHORT = '543534';

    expect(false).toEqual(validateCpf(CPF_SHORT));
  });

  it('should valid cpf', () => {
    const CPF_VALID = '94760362061';

    expect(true).toEqual(validateCpf(CPF_VALID));
  });
});
