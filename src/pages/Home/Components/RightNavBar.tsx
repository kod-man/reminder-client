import { Flex, HStack } from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

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
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
      >
        <GoPlus color="white" size="20px" />
      </Flex>
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
      >
        <BsBell color="white" size="20px" />
      </Flex>
      <Flex
        _hover={{ bg: "gray.100" }}
        cursor="pointer"
        padding={1}
        w={7}
        h={7}
        border="1px solid white"
        fontSize="xs"
        color="green"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="50%"
      >
        MC
      </Flex>
    </HStack>
  );
};

export default RightNavBar;
