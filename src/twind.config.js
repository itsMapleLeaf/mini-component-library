// @ts-check
import { COLORS } from "./constants"

/** @type {import('twind').Configuration} */
const config = {
  theme: {
    colors: COLORS,
    boxShadow: {
      inset: `inset 0px 2px 4px rgba(128, 128, 128, 0.35);`,
    },
    extend: {
      ringWidth: { 3: "3px" },
      ringOffsetWidth: { 3: "3px" },
    },
  },
}

export default config
