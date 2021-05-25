import { useMutation, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useAuthDispatch } from "../context/AuthProvider";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
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
const useRegister = () => {
  const authDispatch = useAuthDispatch();
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const [register, { data, error }] = useMutation(REGISTER_MUTATION);

  const router = useRouter();

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (data) {
      authDispatch("AUTHENTICATE", {
        token: data.register.token,
        user: data.register.user,
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await register({ variables: { ...values } });
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

export default useRegister;
