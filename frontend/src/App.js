import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { SmoothScroll, ScrollTop } from "./components/site";
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import People from "./pages/People";
import Equipment from "./pages/Equipment";
import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="noise min-h-screen bg-ink text-white font-body selection:bg-flame">
      <BrowserRouter>
        <SmoothScroll>
          <ScrollTop />
          <Toaster theme="dark" position="top-center" richColors />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
