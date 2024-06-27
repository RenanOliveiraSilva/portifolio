import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Home from "./Home/Home.jsx"

const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        
      ]
    }
  ]);
  
  export default router;