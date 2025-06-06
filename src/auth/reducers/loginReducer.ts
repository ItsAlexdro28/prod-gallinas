import { LoginState } from "../hooks/useAuth";

type LoginAction =
  | { type: "login"; payload: LoginState["user"] }
  | { type: "logout" };

export const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "login":
      return {
        isAuth: true,
        user: action.payload,
      };
    case "logout":
      return {
        isAuth: false,
        user: undefined,
      };
    default:
      return state;
  }
};
