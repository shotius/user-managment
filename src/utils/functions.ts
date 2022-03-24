export function sleep(delay: number) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export function capitalize(str: string) {
  return str[0].toUpperCase().concat(str.slice(1));
}

export function isString(val: unknown): val is string {
  return typeof val === 'string' || val instanceof String;
}

