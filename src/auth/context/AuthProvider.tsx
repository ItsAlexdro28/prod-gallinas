import React, { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth"
import { AuthContext } from "./AuthContext";

// Define the props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { login, handlerLogin, handlerLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        handlerLogin,
        handlerLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
