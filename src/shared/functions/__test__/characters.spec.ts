import { removeSpecialChar } from '../utils/characters';
import { describe, expect, it } from 'vitest';

describe('Characters', () => {
  it('should remove special characters', () => {
    const specialCharacters = 'jdlsa5643jkf.-fldks65436a$,lfkdj774s';

    expect('564365436774').toEqual(removeSpecialChar(specialCharacters));
  });
});
