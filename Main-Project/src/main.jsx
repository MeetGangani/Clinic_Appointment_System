import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <Auth0Provider
  //   domain="dev-y3fikjjxitpup1it.us.auth0.com"
  //   clientId="cC595qQ6CQL5TGIbUjyUJkC6cnso2goJ"
  //   // authorizationParams={{
  //   //   redirect_uri: window.location.origin
  //   // }}
  //   redirectUri={window.location.origin}>
  //   <App />
  // </Auth0Provider>,
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
