import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeContextProvider } from "./hooks/DarkModeContext";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/Loader";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";
import ProductPage from "./pages/ProductPage";
import CategoriesPage from "./pages/CategoriesPage";
import DetailCard from "./pages/DetailCard";
import SearchPages from "./pages/SearchPages";
import CartPages from "./pages/CartPages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      LoadingPage: <LoadingPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <CartPages /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/settings", element: <Settings /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/categories", element: <CategoriesPage /> },
        { path: "/products/:id", element: <DetailCard /> },
        { path: "/search-products/:query", element: <SearchPages /> },
        { path: "/categories/:category", element: <CategoriesPage /> },
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
