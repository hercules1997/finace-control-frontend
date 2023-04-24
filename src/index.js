import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import AllRoutes from "./routes/routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AllRoutes/>
    <GlobalStyles />
  </>
)
