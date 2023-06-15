import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";

import SecuredPage from "./pages/Secured";
import { checkAuthLoader } from "./helpers/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // loader: isAuthenticated,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "secured",
        element: <SecuredPage />,
        loader: checkAuthLoader,
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
