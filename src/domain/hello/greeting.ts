export function buildGreeting(name?: string): string {
  const safeName = name ?? 'гость';
  return `Привет, ${safeName}!`;
}
