import { ThemeConfig, extendTheme } from "@chakra-ui/react";

// create a config obj, annotate it as ThemeConfig, so we can access its properties
const config: ThemeConfig = {
  initialColorMode: 'dark'
}

const theme = extendTheme({config})

export default theme;