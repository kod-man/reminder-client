import { Flex, HStack } from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import PlusModal from "./PlusModal";
import ProfileMenu from "./ProfileMenu";

const RightNavBar = () => {
  return (
    <HStack
      align-items="center"
      justifyContent="end"
      mr="3"
      ml="auto"
      flexBasis="150px"
      height="100%"
      spacing={4}
    >
      <PlusModal />
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
