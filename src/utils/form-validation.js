export function stringValidation(str) {
  const isString = typeof str === 'string'
  const isEmpty = str.trim().length === 0

  return isString && !isEmpty
}
