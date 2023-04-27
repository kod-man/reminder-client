import { Flex, Text } from "@chakra-ui/react";
import SettingsIcon from "../../../icons/SettingsIcon";

function ProjectsHeader() {
  return (
    <Flex w="100%" mt="14" justifyContent="space-between">
      <Flex alignItems="center">
        <Text as="b" fontSize="20px">
          Projects
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        _hover={{ cursor: "pointer", bgColor: "#ececec" }}
        w="100px"
        justifyContent="center"
        mx="3px"
        borderRadius="5px"
      >
        <SettingsIcon />
        <Text fontSize="13px" ml="5px" color="#666" fontWeight="500">
          Settings
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProjectsHeader;
