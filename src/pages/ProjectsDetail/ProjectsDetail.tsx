import { Divider, Flex, Img, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CreateNewTask from "../../components/CreateNewTask";
import Spinner from "../../components/Spinner";
import QuestionMarkIcon from "../../icons/QuestionMarkIcon";
import { Axios } from "../../utils/axios";
import { API } from "../../utils/usedApi";
import Header from "./Header";

function ProjectsDetail() {
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`${API.getAllReminders}/${userId}`)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [userId]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          w="100%"
          h="100%"
        >
          <Header />
          <Divider w="100%" />
          <Flex w="100%" flexDirection="column" h="100%">
            <CreateNewTask />
            <Flex
              mt="50px"
              w="100%"
              alignItems="center"
              h="100%"
              flexDirection="column"
            >
              <Flex
                h="432px"
                flexDirection="column"
                alignItems="center"
                w="380px"
              >
                <Img src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/19c6289a4432407395ea4abdfc590f52.jpg" />
                <Text
                  fontSize="16px"
                  mb="2"
                  textAlign="center"
                  fontWeight="500"
                >
                  Start small (or dream big)...
                </Text>
                <Text color="gray">
                  Track tasks, follow progress, and discuss{" "}
                </Text>
                <Text color="gray">
                  details in one central, shared project.
                </Text>
              </Flex>
            </Flex>
            <Flex
              alignItems="flex-end"
              justifyContent="center"
              color="#d1453b"
              fontSize="14px"
            >
              <Flex alignItems="center">
                <QuestionMarkIcon cursor="pointer" />

                <Link textDecoration="underline" ml="4px">
                  How to craft a perfect project
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default ProjectsDetail;
