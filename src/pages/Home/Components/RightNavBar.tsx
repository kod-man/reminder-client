import { Button, Flex, HStack } from "@chakra-ui/react";
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
    >
      <PlusModal />
      <Productivity />
      <HelpAndInfo />

      <Flex
        as={Button}
        h="32px"
        w="32px"
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        background="#db4c3f"
        p={0}
        ml="1px !important"
      >
        <BellIcon color="white" />
      </Flex>

      <ProfileMenu />
    </HStack>
  );
};

export default RightNavBar;
