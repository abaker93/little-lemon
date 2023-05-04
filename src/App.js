import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./routes/About";
import Account from "./routes/Account";
import BookingPage from "./routes/BookingPage";
import Cart from "./routes/Cart";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Root from "./routes/Root";

import "./main.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/menu', element: <Menu /> },
      { path: '/reservations', element: <BookingPage /> },
      { path: '/cart', element: <Cart /> },
      { path: '/account', element: <Account /> },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;