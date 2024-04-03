import React from "react";
import ReactDOM from "react-dom";
import "./STYLES/index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react"; 

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-5p8fmagyy25p0rfo.us.auth0.com" clientId="TN2bU3Qu18taKGZIGnyVw58N49lrpVnX" 
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
