import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import ProjectCard from "../../components/Navbar/Components/ProjectCard";
import SmallPlusIcon from "../../icons/SmallPlusIcon";
import AddItemModal from "../../modals/AddItemModal";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectStatus from "./components/ProjectStatus";

const ModalOpen = () => {
  return (
    <Flex border="1px solid red">
      <SmallPlusIcon />
      <Text fontSize="13px">Add Project</Text>
    </Flex>
  );
};

function ProjectsPage() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={isDrawerOpen ? "calc(100% - 20rem)" : "100%"}
      ml="auto"
    >
      <ProjectsHeader />
      <Flex
        w={isLargerThan800 ? "50%" : "80%"}
        mt="5"
        justifyContent="space-between"
      >
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
      <Flex w={isLargerThan800 ? "50%" : "80%"} mt="15px">
        <Divider />
      </Flex>
      <Flex
        flexDirection="column"
        w={isLargerThan800 ? "50%" : "80%"}
        mt="15px"
        gap="15px"
      >
        <ProjectCard />
      </Flex>
    </Flex>
  );
}

export default ProjectsPage;
