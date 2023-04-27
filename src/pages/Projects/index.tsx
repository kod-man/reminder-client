import { Divider, Flex, Text } from "@chakra-ui/react";
import ProjectCard from "../../components/Navbar/Components/ProjectCard";
import SmallPlusIcon from "../../icons/SmallPlusIcon";
import AddItemModal from "../../modals/AddItemModal";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectStatus from "./components/ProjectStatus";

const ModalOpen = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <SmallPlusIcon />
      <Text ml="5px" fontSize="13px">
        Add Project
      </Text>
    </Flex>
  );
};

function ProjectsPage() {
  return (
    <Flex flexDirection="column" alignItems="center" w="100%" h="90vh">
      <ProjectsHeader />
      <Flex w="100%" mt="5" justifyContent="space-between">
        <ProjectStatus />
        <Flex
          _hover={{ cursor: "pointer", bgColor: "#ececec" }}
          alignItems="center"
          w="120px"
          justifyContent="center"
          borderRadius="5px"
          px="5px"
          color="#666"
          fontWeight="500"
        >
          <Flex mr="15px">
            <AddItemModal
              ModalOpenComponent={ModalOpen}
              tooltipLabel="Projects"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" mt="15px">
        <Divider />
      </Flex>
      <Flex flexDirection="column" w="100%" mt="15px" gap="15px">
        <ProjectCard />
      </Flex>
    </Flex>
  );
}

export default ProjectsPage;
