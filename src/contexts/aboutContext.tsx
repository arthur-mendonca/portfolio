import { createContext, useState } from "react";
import { IAboutContext, IAboutProvider } from "./interface";

export const AboutContext = createContext({} as IAboutContext);

export const AboutProvider: React.FC<IAboutProvider> = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);

  const clickNavigate = () => {};

  return (
    <AboutContext.Provider value={{ showAbout, setShowAbout }}>
      {children}
    </AboutContext.Provider>
  );
};
