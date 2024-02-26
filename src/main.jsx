import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.jsx";
import ModalProvider from "./state/StateProvider.jsx";
import Modals from "./Modals.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <Modals>
          <App />
        </Modals>
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
