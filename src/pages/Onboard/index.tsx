import { Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
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

  const ufuj = "sd";
  console.log(ufuj);

  useEffect(() => {
    Axios.get(`${API.getUserDetails}/${userId}`)
      .then((response) => {
        if (response.data.user.userName) {
          setUserName(response.data.user.userName);
          navigate(PATHS.TODAY);
          setLoading(true);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
  }, [userId, userName]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Flex flexDirection="column" w="100%">
          <Flex p="4" mt="13" ml="83" h={28}>
            <Todoist />
          </Flex>
          <OnboardingCard />
        </Flex>
      )}
    </>
  );
}
export default Onboard;
