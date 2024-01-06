import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeContextProvider } from "./hooks/DarkModeContext";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/Loader";
import Product from "./pages/Product";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      LoadingPage: <LoadingPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/product", element: <Product /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/settings", element: <Settings /> },
        { path: "/wishlist", element: <Wishlist /> },
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
