import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../utils/axios";
import { API } from "../utils/usedApi";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = () => {
    setIsLoading(true);
    setError(null);

    const newUser = {
      username: "",
      password: "",
      email: "",
    };

    Axios.post(API.register, newUser)
      .then((res) => {
        navigate(API.login);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return { signup, isLoading, error };
};
