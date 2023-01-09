import { Flex, HStack } from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import HelpAndInfo from "./HelpAndInfo";
import PlusModal from "./PlusModal";
import Productivity from "./Productivity";
import ProfileMenu from "./ProfileMenu";

const RightNavBar = () => {
  return (
    <HStack
      align-items="center"
      justifyContent="end"
      mr="5"
      ml="auto"
      flexBasis="150px"
      height="100%"
      spacing={1}
    >
      <PlusModal />
      <Productivity />
      <HelpAndInfo />
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
      >
        <BellIcon color="white" />
      </Flex>

      <ProfileMenu />
    </HStack>
  );
};

export default RightNavBar;
