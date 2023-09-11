import { Global, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { globalStyles } from "./utils/sharedStyles/globalStyles";
import { RouterProvider } from "react-router-dom";

import "../src/utils/fonts/fonts.css";
import "./normalize.css";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
