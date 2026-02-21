import React from 'react';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client/react";
import client from "./constants/apollo-client";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router}></RouterProvider>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
