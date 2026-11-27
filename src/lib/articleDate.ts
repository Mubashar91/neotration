// Publication dates represent calendar days, independent of the build machine's timezone.
export function articleDate(value: string): Date {
  return new Date(/^\d{4}-\d{2}-\d{2}/.test(value) ? value : `${value} UTC`);
}
