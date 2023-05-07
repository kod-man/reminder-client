import { Divider, Flex } from "@chakra-ui/react";
import CreateNewTask from "../../components/CreateNewTask";
import Header from "./Header";
import IllusturationDetail from "./IllusturationDetail";

function ProjectsDetail() {
  return (
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
      </Flex>
      <IllusturationDetail />
    </Flex>
  );
}

export default ProjectsDetail;
