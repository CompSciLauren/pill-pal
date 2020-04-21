import { registerThemes } from "react-native-themed-styles"

const light = { backgroundColor: "white", textColor: "black", shadow:"black" }
const dark = { backgroundColor: "black", textColor: "white", shadow: "white" }

const styleSheetFactory = registerThemes(
  { light, dark },
  () => "light"
)

export { styleSheetFactory }