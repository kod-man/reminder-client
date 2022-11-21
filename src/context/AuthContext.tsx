import { createContext, FC, ReactNode, useReducer } from "react";

type AuthState = {
  user: string | null;
  dispatch: React.Dispatch<UserAction>;
};

const initialState: AuthState = {
  user: null,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthState>(initialState);

interface UserAction {
  type: string;
  payload: string;
}

interface UserState {
  user: string | null;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
