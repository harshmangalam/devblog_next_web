import { useReducer } from "react";
import { useContext } from "react";
import { useEffect, createContext } from "react";
import useFetchUser from "../hooks/useFetchUser";
import { useRouter } from "next/router";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:4000";


const initialState = {
  userLoading: true,
  user: null,
  isAuthenticated: false,
};

const AuthState = createContext(initialState);

const AuthDispatch = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "AUTHENTICATE":
      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }
      return {
        ...state,
        userLoading: false,
        user: payload.user,
        isAuthenticated: true,
      };

    case "LOGOUT":
      localStorage.getItem("token") && localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case "USER_LOADING":
      return {
        ...state,
        userLoading: payload,
      };
    default:
      return new Error(`${state.type} invalid actions`);
  }
};

export const AuthProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const router = useRouter();
  const dispatch = (type, payload) => defaultDispatch({ type, payload });
  const { data, loading, error: userError } = useFetchUser();

  useEffect(() => {
    if (userError) {
      if (
        userError.graphQLErrors[0]?.extensions?.exception.code ===
        "USERID_MISSING"
      ) {
        return;
      } else {
        dispatch("USER_LOADING", false);
        dispatch("LOGOUT");
        router.push("/auth/login");
      }
    }
  }, [userError]);

  useEffect(() => {
    dispatch("USER_LOADING", loading);
  }, [loading]);

  useEffect(() => {
    if (data) {
      dispatch("AUTHENTICATE", { user: data.me });
    }
  }, [data]);

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthState.Provider>
  );
};

export const useAuthState = () => useContext(AuthState);
export const useAuthDispatch = () => useContext(AuthDispatch);
