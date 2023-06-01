import "./App.css";
import Contact from "./Container/Contact";
import Aboutus from "./Container/Aboutus";
import Product from "./Container/product/Product";
import Home from "./Container/Home";
import Proces from "./Container/Process/Proces";
import BlogNews from "./Container/BlogNews/BlogNews";
import Blog from "./Container/Blog";
import Layout from "./Container/Layout";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { aboutUrl, contactUrl, homeUrl, productUrl, revolutionaryUrl } from "./constants";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={homeUrl} element={<Home />} />
            <Route path={aboutUrl} element={<Aboutus />} />
            <Route path={revolutionaryUrl} element={<Proces />} />
            <Route path={productUrl} element={<Product />} />
            <Route path={contactUrl} element={<Contact />} />
            {/* <Route path="/blog-news" element={<BlogNews />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path='*' element={<Navigate to={homeUrl}/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
