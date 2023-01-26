import { Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../utils/axios";
import { genericErrorToast } from "../../utils/genericToast";
import { PATHS } from "../../utils/paths";
import { API } from "../../utils/usedApi";
import Todoist from "../RegisterAndLogin/Components/Todoist";
import OnboardingCard from "./Components/OnboardingCard";
function Onboard() {
  const navigate = useNavigate();
  const toast = useToast();
  const userId = sessionStorage.getItem("userId");
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    Axios.get(`${API.getUser}/${userId}`)
      .then((response) => {
        if (response.data.user.userName) {
          setUserName(response.data.user.userName);
          navigate(PATHS.TODAY);
        }
        setLoading(false);
        console.log(response);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, userName]);
  return (
    <>
      {!loading && !userName && (
        <>
          <Flex p="4" mt="13" ml="83" h={28}>
            <Todoist />
          </Flex>
          <Flex flexDirection="column" justifyContent="center" mb="40">
            <OnboardingCard />
          </Flex>
        </>
      )}
    </>
  );
}
export default Onboard;
