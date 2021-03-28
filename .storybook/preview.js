import { setup } from "twind"
import config from "../src/twind.config"
import "./global.css"

setup(config)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
