import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme";
import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeColorPresets from "./components/ThemeColorPresets";
import "./index.css";
ReactDOM.render(
    <SettingsProvider>
        <BrowserRouter>
            <ThemeProvider>
                <ThemeColorPresets>
                    <App />
                </ThemeColorPresets>
            </ThemeProvider>
        </BrowserRouter>
    </SettingsProvider>,
    document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
