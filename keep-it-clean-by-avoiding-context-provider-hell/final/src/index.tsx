import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import Provider from "Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
const providers = [
  <ApolloProvider client={client} children={[] as ReactElement[]} />,
  <ReduxProvider store={store} children={[] as ReactElement[]} />,
  <ThemeProvider theme={theme} children={[] as ReactElement[]} />,
  <BrowserRouter />,
];

root.render(
  <Provider providers={providers}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
