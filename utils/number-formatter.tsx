export default function numberFormatter(number: number): string {
  return number.toString().padStart(2, '0');
}
