import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "./hooks/DarkModeContext";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
