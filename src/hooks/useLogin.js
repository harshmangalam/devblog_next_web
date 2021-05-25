import { useMutation, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthDispatch } from "../context/AuthProvider";

const initialState = {
  email: "",
  password: "",
};

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        username
        avatar
      }
    }
  }
`;
const useLogin = () => {
  const authDispath = useAuthDispatch();
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const [login, { data, error }] = useMutation(LOGIN_MUTATION);

  const router = useRouter();

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (data) {
      authDispath("AUTHENTICATE", {
        token: data.login.token,
        user: data.login.user,
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login({ variables: { ...values } });
      router.push("/");
    } catch (_) {}
  };

  return {
    values,
    handleChange,

    showPassword,
    setShowPassword,

    handleSubmit,

    error,
  };
};

export default useLogin;
