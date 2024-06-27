import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

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