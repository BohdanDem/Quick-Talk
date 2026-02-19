import React from 'react';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
