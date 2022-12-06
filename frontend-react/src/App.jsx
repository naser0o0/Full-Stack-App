import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router";

function App() {
  return (
    <div>

      <h1>Hallo App js</h1>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
