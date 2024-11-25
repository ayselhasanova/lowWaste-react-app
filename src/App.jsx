import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// React tools
import { Route, Routes } from "react-router";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import PorsionPlanner from './Pages/PorsionPlanner';

function App() {

  return (
    <>
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetail />} path="/blogdetail/:postId" />
          <Route element={<PorsionPlanner />} path="/porsionplanner" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
    </>
  )
}

export default App
