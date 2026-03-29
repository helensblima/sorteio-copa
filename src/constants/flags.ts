import { FLAG_MAP, FLAG_ALT } from './flagMap'

export const FLAGS = Object.entries(FLAG_MAP).map(([code, src]) => ({
  src,
  alt: FLAG_ALT[code] ?? code,
}))
