import React from "react";
import {RouterProvider} from 'react-router-dom';
import { router } from "./Routing/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <h1>Hallo App js</h1> */}

    </div>
  );
}

export default App;
