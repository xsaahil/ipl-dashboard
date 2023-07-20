// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./helpers/Theme";
import { Team } from "./pages/Team";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        h="calc(100vh)"
        display="flex"
        bgColor="YaleBlue"
        justifyContent="center"
        alignItems="center"
      >
        <Team />
      </Box>
    </ChakraProvider>
  );
}

export default App;
