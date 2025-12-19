import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { ProjectsPage } from "@/pages/projects";
import PrivacyPage from "@/pages/privacy";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectsPage />} />
      {/* <Route path="/privacy" element={<PrivacyPage />} /> */}
    </Routes>
  );
};

export { Router };
