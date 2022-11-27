import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { SiTodoist } from "react-icons/si";

const Todoist = () => {
  return (
    <HStack h="40" align="flex-start" justify="center" padding="0.5rem">
      <SiTodoist size="35px" color="#e44232" />
      <Text as="b" color="#e44232" fontSize="2xl">
        todoist
      </Text>
    </HStack>
  );
};

export default Todoist;
