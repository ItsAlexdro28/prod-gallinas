import { createContext } from "react";
import { LoginState } from "../hooks/useAuth";
import { Credentials } from "../hooks/useAuth";

export interface AuthContextType {
  login: LoginState;
  handlerLogin: (credentials: Credentials) => void;
  handlerLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
