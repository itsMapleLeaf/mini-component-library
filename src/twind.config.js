// @ts-check
import { COLORS } from "./constants"

/** @type {import('twind').Configuration} */
const config = {
  theme: {
    colors: COLORS,
    boxShadow: {
      inset: `inset 0px 2px 4px ${COLORS.transparentGray35}`,
    },
    extend: {
      width: {
        fit: "fit-content",
      },
      height: {
        fit: "fit-content",
      },
      ringWidth: { 3: "3px" },
      ringOffsetWidth: { 3: "3px" },
    },
  },
  plugins: {
    "placeholder-shown": "&:placeholder-shown",
  },
}

export default config
