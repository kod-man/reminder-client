import { useState } from "react";
import { Axios } from "../utils/axios";
import { Routes } from "../utils/routes";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsLoading(true);
    setError(null);

    const loginData = {
      password: "",
      email: "",
    };

    Axios.post(Routes.login, loginData)
      .then((res) => {
        const { token } = res.data.response;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return { login, isLoading, error };
};
