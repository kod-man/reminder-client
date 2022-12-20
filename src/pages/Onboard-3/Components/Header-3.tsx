import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Point from "../../Onboard/Components/Point";
import Todoist from "../../RegisterAndLogin/Components/Todoist";

function Header3() {
  return (
    <Flex h="28">
      <Box p="4" mt="13" ml="83">
        <Todoist />
      </Box>
      <Spacer />
      <Box p="2" mt="30" mr="83">
        <Point color="red.500" />
        <Point color="red.500" />
        <Point color="red.500" />

        <Button ml="5" variant="ghost" color="red.500">
          Atla
        </Button>
      </Box>
    </Flex>
  );
}

export default Header3;
