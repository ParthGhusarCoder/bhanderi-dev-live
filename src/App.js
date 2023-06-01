import "./App.css";
import Contact from "./Container/Contact";
import Aboutus from "./Container/Aboutus";
import Product from "./Container/product/Product";
import Home from "./Container/Home";
import Proces from "./Container/Process/Proces";
import BlogNews from "./Container/BlogNews/BlogNews";
import Blog from "./Container/Blog";
import Layout from "./Container/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/revolutionary" element={<Proces />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog-news" element={<BlogNews />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
