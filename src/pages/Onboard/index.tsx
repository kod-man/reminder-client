import { Flex, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../utils/axios";
import {
  genericServerToast,
  genericValidationToast,
} from "../../utils/genericToast";
import { PATHS } from "../../utils/paths";
import { API } from "../../utils/usedApi";
import Todoist from "../RegisterAndLogin/Components/Todoist";
import OnboardingCard from "./Components/OnboardingCard";

function Onboard() {
  const navigate = useNavigate();
  const toast = useToast();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`${API.getUser}/${userId}`)
      .then((response) => {
        if (response.data.user.userName) {
          navigate(PATHS.HOME);
        }
        console.log(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          genericValidationToast(toast, err);
        } else {
          console.log(err);
          genericServerToast(toast);
        }
      });
  }, [userId]);

  return (
    <>
      <Flex p="4" mt="13" ml="83" h={28}>
        <Todoist />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" mb="40">
        <OnboardingCard />
      </Flex>
    </>
  );
}

export default Onboard;
