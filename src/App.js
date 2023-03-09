import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import theme from "./theme";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
            <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
