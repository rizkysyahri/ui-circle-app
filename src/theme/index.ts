import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { Container } from "./components/Container";

const theme: ThemeConfig = extendTheme({
  components: {
    Container,
  },

  fonts: {
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#1d1d1d"
      }
    },
  },
});

export default theme;
