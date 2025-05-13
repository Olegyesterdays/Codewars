export function nthFibo(n: number): number {
  if (n === 0) return 0;
  
  const numbers: number[] = [0, 1];

  for (let i = 0; i < n; i++) {
    numbers.push(numbers[i + 1] + numbers[i]);
  }

  return numbers[n - 1];
}
