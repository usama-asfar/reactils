export default function getBase64Type(base64: string) {
  return base64.substring('data:'.length, base64.indexOf(';base64'))
}
