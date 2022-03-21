// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brandBlue: {
      100: "rgba(42, 132, 255, .1)",
      400: "#2A84FF",
    },
    brandBlack: {
      400: "#26292E"
    }
  },
})
