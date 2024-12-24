import {
  Context,
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

const AppContext: Context<any> = createContext({});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
