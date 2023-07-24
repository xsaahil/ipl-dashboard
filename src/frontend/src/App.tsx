// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { theme } from "./helpers/Theme";
import { Team } from "./pages/Team";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box height="container.md" bg="YaleBlue" padding={8}>
        <Router>
          <Routes>
            <Route path="/teams/:team" Component={Team} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
