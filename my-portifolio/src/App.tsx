import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home/Home"

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}