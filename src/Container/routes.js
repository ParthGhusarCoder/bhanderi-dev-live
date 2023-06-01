import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Proces from "./Process/Proces";
import Product from "./product/Product";
import Contact from "./Contact";
import BlogNews from "./BlogNews/BlogNews";
import Blog from "./Blog1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/revolutionary",
    element: <Proces />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog-news",
    element: <BlogNews />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
