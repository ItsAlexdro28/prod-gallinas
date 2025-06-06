import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

// Types
export interface LoginState {
  isAuth: boolean;
  user?: {
    email: string;
  };
}

export interface Credentials {
  email: string;
  password: string;
}

export interface UseAuthReturn {
  login: LoginState;
  handlerLogin: (credentials: Credentials) => void;
  handlerLogout: () => void;
}

// Initial state with type
const initialLogin: LoginState = JSON.parse(sessionStorage.getItem("login") || "null") || {
  isAuth: false,
  user: undefined,
};

export const useAuth = (): UseAuthReturn => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = ({ email, password }: Credentials): void => {
    const isLogin = loginUser({ email, password });

    if (isLogin) {
      const user = { email: "admin" };

      dispatch({
        type: "login",
        payload: user,
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );

      navigate("/users");
    } else {
      Swal.fire("Error Login", "Username o password invalidos", "error");
    }
  };

  const handlerLogout = (): void => {
    dispatch({ type: "logout" });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
