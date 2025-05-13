export const toAlternatingCase = (str: string): string =>
  str
    .split('')
    .map((char: string) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
