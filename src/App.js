import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./routes/Error";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Root from "./routes/Root";

import "./main.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/reservations', element: <Reservations /> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;