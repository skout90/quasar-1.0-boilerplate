export const formatPhone = (num) => {
  if (!num) return
  return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
}
