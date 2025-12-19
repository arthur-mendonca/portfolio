import { useState } from "react";
import { useMedia } from "@/utils/useMedia";
import { userData } from "@/utils/userData";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";
import { CgCodeSlash } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia("(max-width: 991px)");

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAboutPage = location.pathname.endsWith("/about");
  const isProjectsPage = location.pathname.endsWith("/projects");

  return (
    <NavbarLinks>
      {userData.whatsappNumber && (
        <Button
          type="primary"
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
        >
          <FaWhatsapp style={{ marginRight: "5px" }} />
          Falar no whatsapp
        </Button>
      )}

      {userData.githubUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${userData.githubUser}`}
        >
          <FaGithub />
        </Button>
      )}

      {userData.linkedinUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
        >
          <FaLinkedinIn />
        </Button>
      )}
      {userData.about && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          onClick={() => navigate(isAboutPage ? "/" : "/about")}
        >
          {isAboutPage ? <FaHome /> : <SiXdadevelopers />}
        </Button>
      )}
      {userData.projetos && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          onClick={() => navigate(isProjectsPage ? "/" : "/projects")}
        >
          {isProjectsPage ? <FaHome /> : <CgCodeSlash />}
        </Button>
      )}
    </NavbarLinks>
  );
};
