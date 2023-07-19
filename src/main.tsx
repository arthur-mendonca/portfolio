import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContext } from "contexts/aboutContext";
import { Router } from "../src/routes/routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <NavBar />
        <Router />
        <Footer />
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
