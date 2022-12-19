import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const RgihtSide = () => {
  return (
    <Flex
      display="flex"
      justify-justifyContent="space-evenly"
      align-items="center"
      bg="#db4c3f"
      maxW={200}
      mr="3"
      ml="auto"
    >
      <Box as={Button} bg="#db4c3f" color="white">
        {<GoPlus />}
      </Box>
      <Box as={Button} bg="#db4c3f" color="white" mr={2} ml="0">
        {<BsBell />}
      </Box>
      <Box
        m="auto"
        width={7}
        height={7}
        as={Button}
        bg="gray.100"
        color="white"
        borderRadius="75%"
        borderColor="white"
      >
        <Text fontSize="xs" color="#db4c3f" padding={0}>
          MC
        </Text>
      </Box>
    </Flex>
  );
};

export default RgihtSide;
