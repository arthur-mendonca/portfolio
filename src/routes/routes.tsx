import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { ProjectsPage } from "@/pages/projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export { Router };
