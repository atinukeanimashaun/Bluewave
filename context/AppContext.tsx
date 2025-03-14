"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <AppContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};