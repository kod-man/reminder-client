import { Button, Flex, HStack } from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import RisingArrowIcon from "../../../icons/RisingArrowIcon";
import HelpAndInfo from "./HelpAndInfo";
import PlusModal from "./PlusModal";
import ProfileMenu from "./ProfileMenu";

const RightNavBar = () => {
  return (
    <HStack
      align-items="center"
      justifyContent="end"
      mr="7"
      ml="auto"
      flexBasis="150px"
      height="100%"
    >
      <PlusModal />
      <Flex
        as={Button}
        p="1"
        h={8}
        background="#db4c3f"
        _hover={{ bg: "#e27065" }}
        fontWeight="light"
        textColor="white"
        fontSize="sm"
      >
        <RisingArrowIcon color="white" />
        0/5
      </Flex>
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
        ml="0px !important"
      >
        <BellIcon color="white" />
      </Flex>

      <ProfileMenu />
    </HStack>
  );
};

export default RightNavBar;
