import { nthFibo } from './index';

describe('nthFibo', () => {
  test('Валидное значение', () => {
    expect(nthFibo(0)).toBe(0);
    expect(nthFibo(1)).toBe(0);
    expect(nthFibo(2)).toBe(1);
    expect(nthFibo(3)).toBe(1);
    expect(nthFibo(4)).toBe(2);
  });
});
