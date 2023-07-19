export interface IAboutContext {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAboutProvider {
  children: React.ReactNode;
}
