export default function numberFormatter(number) {
  number = typeof number === 'number' ? number.toString() : number;
  return number.padStart(2, '0');
}
