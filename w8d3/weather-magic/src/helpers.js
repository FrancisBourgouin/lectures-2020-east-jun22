export const parseTemp = (tempInK) => {
  const tempInC = Math.round((tempInK - 273.15) * 10) / 10

  if (Number.isNaN(tempInC)) {
    return null
  }
  return `${tempInC} °C`
}