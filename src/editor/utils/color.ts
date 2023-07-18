/**
 * RGB to HEX
 * @param color rgb(x, y, x)
 * @returns {string} #000000
 */
export function rgbToHex (rgb: string) {
  if (!rgb.startsWith('rgb')) {
    return rgb
  }

  let splits = rgb.split(',')
  let r = parseInt(splits[0].split('(')[1], 10)
  let g = parseInt(splits[1], 10)
  let b = parseInt(splits[2].split(')')[0], 10)
  let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

  return hex
}

export function hexToRgb (hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export function highlightColor (rgb: string) {
  if (!rgb.startsWith('rgb')) {
    return rgb
  }

  let splits = rgb.split(',')
  let r = parseInt(splits[0].split('(')[1], 10)
  let g = parseInt(splits[1], 10)
  let b = parseInt(splits[2].split(')')[0], 10)
  let sum = r + g + b
  let color = '#000000'
  if (sum < 180 * 3) {
    color = '#ffffff'
  }

  return color
}