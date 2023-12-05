import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AddBookProvider } from "./context/AddBookContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AddBookProvider>
      <App />
    </AddBookProvider>
  </React.StrictMode>
);
