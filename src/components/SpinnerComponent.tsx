import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import React from "react";

function SpinnerComponent() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignContent="center"
      justifyContent="center"
    >
      <Center>
        <Spinner color="red.500" />
      </Center>
    </Flex>
  );
}

export default SpinnerComponent;
