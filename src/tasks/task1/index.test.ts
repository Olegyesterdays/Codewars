import { sum } from './index';

describe('sum', () => {
  test('Валидное значение', () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 8)).toBe(10);
  });
});
