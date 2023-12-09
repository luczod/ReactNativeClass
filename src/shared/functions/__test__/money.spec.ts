import { describe, expect, it } from 'vitest';
import { toMoney } from '../utils/money';

describe('money', () => {
  it('should return money', () => {
    const returnMoney = toMoney.format(55);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('55,00');
  });

  it('should return money with decimal', () => {
    const returnMoney = toMoney.format(54.54);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('54,54');
  });

  it('should return money with thousand', () => {
    const returnMoney = toMoney.format(6456.54);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('6.456,54');
  });
});
