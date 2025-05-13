import { greet } from './index';

describe('greet', () => {
  test('Валидное значение', () => {
    expect(greet('Daniel', 'Daniel')).toBe('Hello boss');
    expect(greet('Greg', 'Daniel')).toBe('Hello guest');
  });
});
