import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/App.scss";
import { Toastify } from "./config/Toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Toastify />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
